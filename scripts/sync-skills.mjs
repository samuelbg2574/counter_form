#!/usr/bin/env node

/**
 * Generates command/skill files for all supported AI coding platforms.
 * Source of truth: each SKILL.md under .claude/skills.
 *
 * Usage: node scripts/sync-skills.mjs
 */

import { existsSync, readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_ROOT = join(ROOT, '.claude', 'skills');

if (!existsSync(SOURCE_ROOT)) {
  console.error('Error: Source skills directory not found at .claude/skills');
  process.exit(1);
}

const skills = readdirSync(SOURCE_ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(SOURCE_ROOT, name, 'SKILL.md')))
  .sort();

if (skills.length === 0) {
  console.error('Error: No source skills found under .claude/skills');
  process.exit(1);
}

// --- Helpers ---

function write(relPath, content) {
  const full = join(ROOT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
  console.log(`  \u2713 ${relPath}`);
}

const HEADER =
  '<!-- AUTO-GENERATED from .claude/skills — do not edit directly.\n' +
  '     Run `node scripts/sync-skills.mjs` to regenerate. -->\n\n';

const noArgs = (text) => text.replace(/\$ARGUMENTS/g, 'the target URL provided by the user');

function parseSkill(raw, skillName) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.error(`Error: Could not parse frontmatter for ${skillName}`);
    process.exit(1);
  }

  const frontmatter = match[1];
  const descriptionMatch = frontmatter.match(/^description:\s*(.+)$/m);
  const description = descriptionMatch
    ? descriptionMatch[1].replace(/^["']|["']$/g, '')
    : `Run the ${skillName} workflow`;

  return { body: match[2], description };
}

// --- Generate ---

console.log('Syncing skills to all platforms...');
console.log(`  Source: .claude/skills/*/SKILL.md\n`);

for (const skillName of skills) {
  const relSource = `.claude/skills/${skillName}/SKILL.md`;
  const raw = readFileSync(join(ROOT, relSource), 'utf8').replace(/\r\n/g, '\n');
  const { body, description } = parseSkill(raw, skillName);
  const geminiBody = body.replace(/\$ARGUMENTS/g, '{{args}}');

  console.log(`${skillName}:`);

  // 1. Codex CLI — same SKILL.md format, same $ARGUMENTS syntax
  write(`.codex/skills/${skillName}/SKILL.md`, raw);

  // 2. GitHub Copilot — same SKILL.md format
  write(`.github/skills/${skillName}/SKILL.md`, raw);

  // 3. Cursor — plain markdown, no argument substitution support
  write(`.cursor/commands/${skillName}.md`, HEADER + noArgs(body));

  // 4. Windsurf — markdown workflow
  write(`.windsurf/workflows/${skillName}.md`, HEADER + noArgs(body));

  // 5. Gemini CLI — TOML format, {{args}} for arguments
  write(
    `.gemini/commands/${skillName}.toml`,
    `# AUTO-GENERATED from ${relSource}\n` +
      `# Run \`node scripts/sync-skills.mjs\` to regenerate.\n\n` +
      `description = ${JSON.stringify(description)}\n\n` +
      `[prompt]\ntext = '''\n${geminiBody}\n'''\n`
  );

  // 6. OpenCode — markdown + YAML frontmatter, $ARGUMENTS works natively
  write(
    `.opencode/commands/${skillName}.md`,
    `---\ndescription: "${description}"\n---\n${HEADER}${body}`
  );

  // 7. Augment Code — markdown + YAML frontmatter
  write(
    `.augment/commands/${skillName}.md`,
    `---\ndescription: "${description}"\nargument-hint: "<url>"\n---\n${HEADER}${body}`
  );

  // 8. Continue — prompt file with invokable: true
  write(
    `.continue/commands/${skillName}.md`,
    `---\nname: ${skillName}\ndescription: "${description}"\ninvokable: true\n---\n${HEADER}${body}`
  );

  // 9. Amazon Q — JSON agent definition
  write(
    `.amazonq/cli-agents/${skillName}.json`,
    JSON.stringify(
      {
        name: skillName,
        description,
        prompt: noArgs(body),
        fileContext: ['AGENTS.md', 'docs/research/**'],
      },
      null,
      2
    ) + '\n'
  );

  console.log('');
}

console.log(`Done! ${skills.length} skill(s) generated for 9 platform targets.`);
