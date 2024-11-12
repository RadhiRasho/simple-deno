import { sleep } from "../utils/index.ts";

console.log("Creating directories...");
await Deno.mkdir("new_dir");
await Deno.mkdir("./dir/dir2/subdir", { recursive: true });

await sleep(2000);

console.log("Removing directories...");
await Deno.remove("./new_dir");
await sleep(2000);
await Deno.remove("./dir", { recursive: true });
await sleep(2000);

console.log("Creating directories synchronously...");
Deno.mkdirSync("new_dir");
await sleep(2000);

console.log("Removing directories synchronously...");
Deno.removeSync("new_dir");