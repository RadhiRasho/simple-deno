const name = Deno.args[0];
const food = Deno.args[1];

console.log(`Hello ${name}, I like ${food}!`);

import { parseArgs } from "@std/cli";

const flags = parseArgs(Deno.args, {
	boolean: ["help", "color"],
	string: ["version"],
	default: {
		color: true,
		version: "0.0.0",
	},
	negatable: ["color", "version"],
});

console.log("Want help?", flags.help);
console.log("Version: ", flags.version);
console.log("Want color?", flags.color);

console.log("Other: ", flags._);
