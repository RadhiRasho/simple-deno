try {
	await Deno.mkdir("new_dir");
} catch (err) {
	if (!(err instanceof Deno.errors.AlreadyExists)) {
		throw err;
	}
}

try {
	await Deno.lstat("deno.json");
	console.log("exists");
} catch (err) {
	if (!(err instanceof Deno.errors.NotFound)) {
		throw err;
	}
	console.log("not exists!");
}
