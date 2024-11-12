import { parseArgs } from "jsr:@std/cli";
import { expandGlob } from "jsr:@std/fs";

const flags = parseArgs(Deno.args, {
	string: ["file"],
	default: {
		file: "",
	},
});

if (!flags.file) {
	console.error("No file provided");
	Deno.exit(1);
}
const FilesList = await Array.fromAsync(
	expandGlob(`**/*${flags.file}*`, { root: "." }),
);

const files = FilesList.filter((files) => files.name.includes(flags.file));
if (files.length === 0) {
	console.error("No files found");
	Deno.exit(1);
}
if (files.length > 1) {
	console.error("Multiple files found");
	Deno.exit(1);
}

const file = files[0];
const command = new Deno.Command(Deno.execPath(), {
	args: [file?.path],
});
try {
	const child = command.spawn();

	child.ref();
} catch (error) {
	console.error("Error while running the file: ", error);
	Deno.exit(4);
}
