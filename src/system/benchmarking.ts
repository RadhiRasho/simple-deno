Deno.bench("URL Parsing", () => {
	new URL("https://deno.land");
});

Deno.bench("Async Method", async () => {
	await crypto.subtle.digest("SHA-256", new Uint8Array([1, 2, 3]));
});

Deno.bench({
	name: "Long form",
	fn: () => {
		new URL("https://deno.land");
	},
});

Deno.bench({
	name: "Date.now()",
	group: "timing",
	baseline: true,
	fn: () => {
		Date.now();
	},
});

Deno.bench({
	name: "performance.now()",
	group: "timing",
	fn: () => {
		performance.now();
	},
});
