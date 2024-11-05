import { serveDir, serveFile } from "@std/http";

Deno.serve((req: Request) => {
	const pathname = new URL(req.url).pathname;

	if (pathname === "/simple_file") {
		return serveFile(req, "./src/network/serving-files.ts");
	}

	console.log(pathname);
	if (pathname.startsWith("/static")) {
		return serveDir(req, {
			urlRoot: "static",
		});
	}

	return new Response("404: Not Found", {
		status: 404,
	});
});

// "I'm running, why are you looking at me?"
