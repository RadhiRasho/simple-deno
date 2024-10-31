import { assert, assertEquals } from "@std/assert";

Deno.test("assert works correclty", () => {
	assert(true);
	assertEquals(1, 1);
});

Deno.test("testing steps", async (t) => {
	const file = await Deno.open("example.txt", {
		read: true,
		write: true,
		create: true,
	});

	const encoder = new TextEncoder();

	const data = encoder.encode("Hello World");

	await t.step("write some bytes", async () => {
		const bytesWritten = await file.write(data);
		assertEquals(bytesWritten, data.length);
		await file.seek(0, Deno.SeekMode.Start);
	});

	await t.step("Write some bytes", async () => {
		const buffer = new Uint8Array(data.length);

		await file.read(buffer);

		assertEquals(buffer, data);
	});

	file.close();
});

Deno.test({
	name: "Leaky Test",
	async fn() {
		await Deno.open("example.txt");
		await Deno.remove("example.txt");
	},
	sanitizeResources: false,
});
