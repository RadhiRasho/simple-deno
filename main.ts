import { Input, Select } from "@cliffy/prompt";
import { type WalkEntry, expandGlob } from "@std/fs";

Deno.addSignalListener("SIGINT", () => {
	console.log("\n\n❌ Process Interrupted!");
	Deno.exit(0);
});

let [fileName] = Deno.args;

if (!fileName) {
	const answer = await Input.prompt({
		message: "Enter File name to run (Full or Partial)",
		validate(value) {
			if (typeof value !== "string") {
				return "Please enter a string";
			}
			return true;
		},
		cbreak: true,
	});

	fileName = answer.toLowerCase();
}

console.log();

const data = await Array.fromAsync(
	expandGlob(`**/*${fileName}*`, { root: "./src" }),
);

const files = data.filter((x) => x.name.includes(fileName));

let file = files.length === 1 ? files[0] : undefined;

if (files.length > 1) {
	const options = files.map((file) => ({ name: file.name, value: file }));

	const result = await Select.prompt<WalkEntry>({
		message: "Multiple files were found, which one do you want to run",
		options: options,
		cbreak: true,
	});

	file = result;
}

const command = new Deno.Command(Deno.execPath(), {
	args: ["-A", file?.path ?? ""],
});

try {
	const child = command.spawn();

	child.ref();
} catch (error) {
	console.error("Error while running the file: ", error);
	Deno.exit(4);
}
