const encoder = new TextEncoder();

const conn = await Deno.connect({
	hostname: "golang.org",
	port: 80,
	transport: "tcp",
});

const a = await conn.write(encoder.encode("ping"));

console.log(a);