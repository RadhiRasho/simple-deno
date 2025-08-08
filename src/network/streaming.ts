function handler(_req: Request): Response {
	let timer: number | undefined;

	const body = new ReadableStream({
		start(controller) {
			timer = setInterval(() => {
				const timeStamp = new Date().toISOString();
				const message = `It is ${timeStamp} \n`;

				const encoded = new TextEncoder().encode(message);
				controller.enqueue(encoded);
			});
		},

		cancel() {
			if (timer !== undefined) {
				clearInterval(timer);
			}
		},
	});

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain",
			"x-content-type-options": "nosniff",
		},
	});
}

Deno.serve(handler);
