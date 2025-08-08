import { sleep } from "../utils/index.ts";

const output = await Deno.open("./tmp/example.txt", { create: true, append: true });

const outputWriter = output.writable.getWriter();

await outputWriter.ready;

const outputText = "I love Deno!\n";

const encoded = new TextEncoder().encode(outputText);

await sleep(2000);

await outputWriter.write(encoded);

await outputWriter.close();

const input = await Deno.open("./tmp/example.txt");

const inputReader = input.readable.getReader();

const decoder = new TextDecoder();

while (true) {
	const result = await inputReader.read();

	if (result.done) break;
	console.log(`Read chunk: ${decoder.decode(result.value)}`);
}
