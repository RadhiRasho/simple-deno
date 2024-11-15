const decoder = new TextDecoder();

const listener = Deno.listenDatagram({
	port: 10000,
	transport: "udp",
});

for await (const [data, address] of listener) {
	console.log(`Server - recieved information from ${JSON.stringify(address)}`);

	console.log(`Server - recieved: ${decoder.decode(data)}`);

	listener.close();
}
