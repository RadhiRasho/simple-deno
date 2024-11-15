const kv = await Deno.openKv();

await kv.set(["counter"], new Deno.KvU64(0n));

setInterval(() => {
	kv.atomic().sum(["counter"], 1n).commit();
}, 1000);

const stream = kv.watch([["counter"]]).getReader();

while (true) {
	const counter = await stream.read();

	if ((counter.value as { value: bigint }[])[0]?.value > 10n) {
		break;
	}

	console.log(`Counter: ${counter.value?.[0].value}`);
}

Deno.serve((_req) => {
	const stream = kv.watch([["counter"]]).getReader();
	const body = new ReadableStream({
		async start(controller) {
			while (true) {
				if ((await stream.read()).done) {
					return;
				}

				const data = await kv.get(["counter"]);
				controller.enqueue(
					new TextEncoder().encode(`Counter: ${data.value}\n`),
				);
			}
		},
		cancel() {
			stream.cancel();
		},
	});

	return new Response(body, {
		headers: {
			"Content-Type": "text/event-stream",
		},
	});
});
