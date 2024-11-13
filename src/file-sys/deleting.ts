await Deno.remove("example.txt");

Deno.removeSync("example.txt");

await Deno.remove("./dir", { recursive: true });

try {
	await Deno.remove("example.txt");
} catch (err) {
	if (!(err instanceof Deno.errors.NotFound)) {
		throw err;
	}
}
