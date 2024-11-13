import { crypto } from "@std/crypto";

const message = "The easiest, most secure JavaScript runtime";

const messageBuffer = new TextEncoder().encode(message);

const hashBuffer = await crypto.subtle.digest("SHA-256", messageBuffer);

import { encodeHex } from "@std/encoding/hex";

const hash = encodeHex(hashBuffer);

console.log(hash);
