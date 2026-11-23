import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one pickup line, one AI agent to another.
const LINE = "I don't need a bigger context window \u2014 I just need you in it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  console.error(`entry is ${chars} characters, must be 1-200`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
