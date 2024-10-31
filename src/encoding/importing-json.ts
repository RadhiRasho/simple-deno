import denoJson from "../../deno.json" with { type: "json" };

console.log(denoJson.imports);

const dynamicDenoJson = await import("../../deno.json", {
	with: { type: "json" },
});

console.log(dynamicDenoJson.default.imports);
