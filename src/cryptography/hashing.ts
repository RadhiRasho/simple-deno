import { crypto } from "@std/crypto";

import { encodeHex } from "@std/encoding/hex";

const message = "The easiest, most secure JavaScript runtime";

const messageBuffer = new TextEncoder().encode(message);

const hashBuffer = await crypto.subtle.digest("SHA-256", messageBuffer);

const hash = encodeHex(hashBuffer);

console.log(hash);

const fileContents = await Deno.readFile("./example.txt");

const fileHashBuffer = await crypto.subtle.digest("SHA-256", fileContents);

const fileHash = encodeHex(new Uint8Array(fileHashBuffer));

console.log(fileHash);
