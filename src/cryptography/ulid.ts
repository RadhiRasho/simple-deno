import { ulid } from "@std/ulid";

console.log(ulid());
console.log(ulid());
console.log(ulid());

const timestamp = Date.now();
console.log(ulid(timestamp));
console.log(ulid(timestamp));
console.log(ulid(timestamp));

import { decodeTime } from "@std/ulid";

const myULID = ulid();
console.log(decodeTime(myULID));

import { monotonicUlid } from "@std/ulid";
console.log(monotonicUlid(150000)); // 000XAL6S41ACTAV9WEVGEMMVR8
console.log(monotonicUlid(150000)); // 000XAL6S41ACTAV9WEVGEMMVR9
console.log(monotonicUlid(150000)); // 000XAL6S41ACTAV9WEVGEMMVRA
