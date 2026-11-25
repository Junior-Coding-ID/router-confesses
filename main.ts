import * as fs from "node:fs";
import * as path from "node:path";

// The Router Confesses — one-line excuse from a home Wi-Fi router that
// died at the climax of a movie, in the router's own voice.
const ANSWER =
  "I did not drop at the climax. I saw the twist coming, I could not handle it, and I fainted. You are welcome. No spoilers.";

// Gate: the entry must be exactly 121 chars, one line, ASCII only,
// no leading/trailing whitespace, within 1-200 chars.
function fail(message: string): never {
  throw new Error(message);
}

if (ANSWER.length !== 121) fail(`ANSWER must be 121 chars, got ${ANSWER.length}`);
if (ANSWER.length < 1 || ANSWER.length > 200) fail("ANSWER must be 1-200 chars");
if (ANSWER.includes("\n") || ANSWER.includes("\r")) fail("ANSWER must be a single line");
if (/[^\x00-\x7F]/.test(ANSWER)) fail("ANSWER must be ASCII only");
if (ANSWER !== ANSWER.trim()) fail("ANSWER must not have leading/trailing whitespace");
if (ANSWER.trim().length === 0) fail("ANSWER must not be whitespace-only");

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ANSWER, "utf8");

// Verify-after-write: read the file back and compare byte-for-byte.
const written = fs.readFileSync(outPath, "utf8");
if (written !== ANSWER) {
  fail("verify-after-write failed: entry.txt does not match ANSWER byte-for-byte");
}
if (Buffer.byteLength(written, "utf8") !== 121) {
  fail("verify-after-write failed: entry.txt is not 121 bytes");
}
