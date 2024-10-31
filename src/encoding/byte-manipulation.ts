const a = new Uint8Array([0, 1, 2, 3, 4]);
const b = new Uint8Array([5, 6, 7, 8, 9]);
const c = new Uint8Array([4, 5]);

import { concat } from "@std/bytes";

const d = concat([a, b]);

console.log(d); // Uint8Array [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

import { repeat } from "@std/bytes";

const e = repeat(c, 4);

console.log(e); // Uint8Array [ 4, 5, 4, 5, 4, 5, 4, 5 ]

import { copy } from "@std/bytes";

const cpy = new Uint8Array(5);

console.log("Bytes copied: ", copy(a, cpy)); // Bytes copied: 5
console.log("Bytes: ", cpy); // Uint8Array [ 0, 1, 2, 3, 4 ]
