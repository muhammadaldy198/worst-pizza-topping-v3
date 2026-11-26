import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Pick locked after duel filter: beats jonas, gentle-beacon-38 and zhiepho 2-0.
const PICK = "New topping: roadkill possum on warm custard. Fifty-three customers tried it; fifty-two asked for a new stomach, and the fifty-third was evicted — by the possum.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PICK);
chmodSync("/output/entry.txt", 0o644);
