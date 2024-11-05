Deno.serve((req) => {
	if (req.headers.get("upgrade") !== "websocket") {
		return new Response(null, { status: 501 });
	}

	const { socket, response } = Deno.upgradeWebSocket(req);

	socket.addEventListener("open", () => {
		console.log("H Joined the Chat");
	});

	socket.addEventListener("message", (event) => {
		if (event.data) {
			socket.send("H is whispering sweet nothings");
		}
	});

	return response;
});