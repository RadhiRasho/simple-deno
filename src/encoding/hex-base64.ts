import { decodeBase64, encodeBase64 } from "@std/encoding/base64";
import { decodeHex, encodeHex } from "@std/encoding/hex";

const base64Encoded = encodeBase64("somestringtoencode");

console.log(encodeBase64(new Uint8Array([1, 32, 67, 120, 19])));

const base64Decoded = decodeBase64(base64Encoded);

const textEncoder = new TextEncoder();

const textDecoder = new TextDecoder();

console.log(textDecoder.decode(base64Decoded));

const arrayBuffer = textEncoder.encode("somestringtoencode");

const hexEncoded = encodeHex(arrayBuffer);

console.log(hexEncoded);

const hexDecoded = decodeHex(hexEncoded);

console.log(textDecoder.decode(hexDecoded));
