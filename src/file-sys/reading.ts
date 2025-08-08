await Deno.readFile("./tmp/hello.txt");

await Deno.readTextFile("./tmp/hello.txt");

const file = await Deno.open("./tmp/hello.txt");

const buffer = new Uint8Array(5);

const bytesRead = await file.read(buffer);

console.log(`Read ${bytesRead} bytes`);

const pos = await file.seek(6, Deno.SeekMode.Start);

console.log(`Sought to position ${pos}`);

const buffer2 = new Uint8Array(2);

const bytesRead2 = await file.read(buffer2);

console.log(`Read ${bytesRead2} bytes`);

await file.seek(0, Deno.SeekMode.Start);

file.close();

Deno.readFileSync("./tmp/hello.txt");

Deno.readTextFileSync("./tmp/hello.txt");

const f = Deno.openSync("./tmp/hello.txt");

f.seekSync(6, Deno.SeekMode.Start);

const buf = new Uint8Array(5);

f.readSync(buf);

f.close();
