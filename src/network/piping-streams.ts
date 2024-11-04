const download = await Deno.open("example.html", { create: true, write: true });

const req = await fetch("https://examples.deno.land");

req.body?.pipeTo(download.writable);

import { bgBrightYellow } from "@std/fmt/colors";

class HighlightTransformStream extends TransformStream {
	constructor() {
		super({
			transform: (chunk, controller) => {
				controller.enqueue(chunk.replaceAll("<", bgBrightYellow("<")));
			},
		});
	}
}

const example = await Deno.open("example.html", { read: true });

await example.readable
	.pipeThrough(new TextDecoderStream())
	.pipeThrough(new HighlightTransformStream())
	.pipeThrough(new TextEncoderStream())
	.pipeTo(Deno.stdout.writable);

Deno.remove("example.html");
