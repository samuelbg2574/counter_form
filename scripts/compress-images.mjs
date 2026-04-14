#!/usr/bin/env node
/* eslint-disable no-console */
import { readdir, stat } from "node:fs/promises";
import { extname, join } from "node:path";
import sharp from "sharp";

const ROOTS = ["public/images", "public/seo"];
const EXTS = new Set([".png", ".jpg", ".jpeg"]);
const QUALITY = 75;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (EXTS.has(extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

async function convert(file) {
  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const before = (await stat(file)).size;
  await sharp(file).webp({ quality: QUALITY, effort: 5 }).toFile(out);
  const after = (await stat(out)).size;
  const saved = (1 - after / before) * 100;
  console.log(
    `${file} → ${out}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (-${saved.toFixed(0)}%)`,
  );
}

async function main() {
  const files = (await Promise.all(ROOTS.map(walk))).flat();
  for (const file of files) {
    try {
      await convert(file);
    } catch (err) {
      console.error(`skip ${file}: ${err.message}`);
    }
  }
}

main();
