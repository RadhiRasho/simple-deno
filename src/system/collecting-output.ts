const command = new Deno.Command("deno", {
	args: [
		"eval",
		"\
        console.log('hello from deno'); \
        console.error('hello from stderr'); \
        ",
	],
});

let result = await command.output();

result = command.outputSync();

const textDecoder = new TextDecoder();

console.log("stdout: ", textDecoder.decode(result.stdout));
console.log("stderr", textDecoder.decode(result.stderr));
