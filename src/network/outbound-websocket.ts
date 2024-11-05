const socket = new WebSocket("ws://localhost:8000");

socket.addEventListener("open", () => {
	console.log(socket.readyState);

	socket.send("I miss you");
});

socket.addEventListener("message", (event) => {
	console.log(event.data);
});
