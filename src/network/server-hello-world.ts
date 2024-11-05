function handler(_: Request): Response {
	return new Response("Hello, World!");
}

Deno.serve(handler);
