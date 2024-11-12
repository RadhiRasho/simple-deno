import { sleep } from "../utils/index.ts";

await Deno.writeTextFile("./hello.txt", "Hello World!");
await sleep(2000);

await Deno.rename("./hello.txt", "./hello-renamed.txt");
console.log(await Deno.readTextFile("./hello-renamed.txt"));

await sleep(2000);

try {
	await Deno.rename("./hello.txt", "./does/not/exits");
} catch (err) {
	console.error(err);
}

Deno.renameSync("./hello-renamed.txt", "./hello-again.txt");
await sleep(2000);

await Deno.writeTextFile("./hello.txt", "Invisible contnet.");
await sleep(2000);

await Deno.rename("./hello-again.txt", "./hello.txt");
console.log(await Deno.readTextFile("./hello.txt"));