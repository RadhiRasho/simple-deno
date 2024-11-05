const caCert = await Deno.readTextFile("./root.pem");

const conn = await Deno.connectTls({
	hostname: "127.0.0.1",
	port: 443,
	caCerts: [caCert],
});

const encoder = new TextEncoder();

await conn.write(encoder.encode("ping"));