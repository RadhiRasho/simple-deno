const bytes = new Uint8Array([72, 101, 108, 108, 111]);

await Deno.writeFile("./tmp/hello.txt", bytes, { mode: 0o644 });

await Deno.writeTextFile("./tmp/hello.txt", "Hello World");

await Deno.writeTextFile("server.log", "Request: ...\n", { append: true });

Deno.writeFileSync("./tmp/hello.txt", bytes);

Deno.writeTextFileSync("./tmp/hello.txt", "Hello World");

const file = await Deno.create("./tmp/hello.txt");

const written = await file.write(bytes);

console.log(`${written} bytes written.`);

const writer = file.writable.getWriter();

await writer.write(new TextEncoder().encode("World!"));

await writer.close();
