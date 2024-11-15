// deno-lint-ignore-file
const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
	type: "module",
});

worker.postMessage({
	filename: "./example.txt",
});

const worker2 = new Worker(new URL("./worker.ts", import.meta.url).href, {
	type: "module",
	//@ts-ignore
	deno: {
		permissions: {
			read: [
				new URL("./example.txt", import.meta.url),
				new URL("./example.txt", import.meta.url),
			],
		},
	},
});

worker2.postMessage({ filename: "./server.log" });
