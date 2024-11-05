let res = await fetch("https://example.com");

console.log(res.status); // 200
console.log(res.headers.get("Content-Type")); // text/html
console.log(await res.text()); // <!DOCTYPE html>...

res = await fetch("https://example.com");
await res.arrayBuffer();
//** or await res.json() */
//** or await res.blob() */

res = await fetch("https://example.com", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"X-API-Key": "foobar",
	},
	body: JSON.stringify({
		param: "value",
	}),
});

const req = new Request("https://example.com", {
	method: "DELETE",
});
res = await fetch(req);

const url = "https://example.com";
new Request(url, {
	method: "POST",
	body: new Uint8Array([1, 2, 3]),
});
new Request(url, {
	method: "POST",
	body: new Blob(["Hello, World!"]),
});
new Request(url, {
	method: "POST",
	body: new URLSearchParams({ foo: "bar" }),
});
const formData = new FormData();
formData.append("name", "Deno");
formData.append("file", new Blob(["Hello, World!"]), "hello.txt");

res = await fetch("https://example.com", {
	method: "POST",
	body: formData,
});

const bodyStream = new ReadableStream({
	start(controller) {
		controller.enqueue(new TextEncoder().encode("Hello, World!"));
		controller.close();
	},
});

res = await fetch("https://example.com", {
	method: "POST",
	body: bodyStream,
});
