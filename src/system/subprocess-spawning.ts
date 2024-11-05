const command = new Deno.Command("deno", {
	args: ["fmt", "-"],
	stdin: "piped",
	stdout: "piped",
});

const process = command.spawn();
const writer = process.stdin.getWriter();

writer.write(new TextEncoder().encode("console.log('hello')"));
writer.releaseLock();

await process.stdin.close();

const result = await process.output();
console.log(new TextDecoder().decode(result.stdout));
