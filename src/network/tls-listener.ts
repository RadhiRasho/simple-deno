const listener = Deno.listenTls({
	hostname: "127.0.0.1",
	port: 443,
	transport: "tcp",
	cert: Deno.readTextFileSync("./server.crt"),
	key: Deno.readTextFileSync("./server.key"),
});

for await (const conn of listener) {
	await conn.readable.pipeTo(Deno.stdout.writable);
	conn.close();
}
