const myUUID = crypto.randomUUID();

console.log(`Random UUID: ${myUUID}`);

import { v1, v3, v4, v5, validate } from "@std/uuid";

console.log(validate("not a UUID")); // false
console.log(validate("6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b")); // true

console.log(`UUID V1: ${v1.generate()}`);

const NAMESPACE_URL = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const data = new TextEncoder().encode("deno.land");

console.log(`UUID V3: ${await v3.generate(NAMESPACE_URL, data)}`);

console.log(
	`UUID V4 (Validation): ${
		v4.validate("6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b")
	}`,
);

console.log(`UUID V5: ${await v5.generate(NAMESPACE_URL, data)}`);
