for await (const dirEntry of Deno.readDir(".")) {
	console.log(`Basic listing: ${dirEntry.name}`);
}

import { walk } from "@std/fs/walk";

for await (const dirEntry of walk(".")) {
	console.log(`Recursive walking: ${dirEntry.name}`);
}

for await (const dirEntry of walk(".", { exts: ["ts"] })) {
	console.log(`Recursive walking with extension: ${dirEntry.name}`);
}