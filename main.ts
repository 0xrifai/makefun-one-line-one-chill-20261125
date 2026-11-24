// One Line, One Chill — make.fun entry
// Writes a single sentence of horror to /output/entry.txt.
//
// The line: an ultrasound, two heartbeats, and a doctor's smile.
// The scare is what the sentence withholds — what is the second
// heartbeat, and why does the doctor already know?

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The ultrasound showed two heartbeats, and the doctor smiled and said only one of them was mine.";

// The gate allows 1–200 characters. Keep the line well inside it:
// a single sentence, one breath, no room for a second scare.
if (line.length > 195) {
  throw new Error(`entry line too long: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

console.log(`wrote ${line.length} characters to /output/entry.txt`);
