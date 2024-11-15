const encoder = new TextEncoder();

const listener = Deno.listenDatagram({
	port: 10001,
	transport: "udp",
});

const peerAddress: Deno.NetAddr = {
	transport: "udp",
	hostname: "127.0.0.1",
	port: 10000,
};

await listener.send(encoder.encode("ping"), peerAddress);

listener.close();
