const bytes = await Deno.readFile("hello.txt");

const text = await Deno.readTextFile("hello.txt");

const file = await Deno.open("hello.txt");

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

Deno.readFileSync("hello.txt");

Deno.readTextFileSync("hello.txt");

const f = Deno.openSync("hello.txt");

f.seekSync(6, Deno.SeekMode.Start);

const buf = new Uint8Array(5);

f.readSync(buf);

f.close();
