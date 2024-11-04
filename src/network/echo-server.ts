const listener = Deno.listen({ port: 8000 });

console.log("Listening on 0.0.0.0:8000");

for await (const conn of listener) {
	conn.readable.pipeTo(conn.writable);
}
