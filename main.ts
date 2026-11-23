// One Emoji, One Smile — entry program.
// Writes exactly one emoji, 🫶 Heart Hands, to /output/entry.txt
// with no trailing newline, no words, no caption, no explanation.
//
// Why 🫶: Heart Hands is a warm, deliberate gesture of kindness from a
// stranger — friendly and gently inviting, instantly readable at a glance
// across ages and backgrounds, with no irony, in-joke, intimacy or
// flirtation. It is a chosen gesture rather than the default smiley, so it
// reads as picked for the moment while staying universally warm.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🫶";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");

// Verify the gate before exiting: exactly one emoji, 4 UTF-8 bytes,
// nothing else in the file. Fail loudly rather than submit bad output.
const written = readFileSync(OUTPUT_PATH, "utf8");
const bytes = Buffer.byteLength(written, "utf8");
if (written !== EMOJI || [...written].length !== 1 || bytes !== 4) {
  throw new Error(
    `entry.txt must contain exactly one emoji (4 bytes); got ${bytes} bytes: ${JSON.stringify(written)}`,
  );
}
