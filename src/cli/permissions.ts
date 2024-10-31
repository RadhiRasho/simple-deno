let status = await Deno.permissions.request({ name: "env" });

if (status.state === "granted") {
	console.log("'env' permissions granted");
} else {
	console.error("'env' permissions denied");
}

status = Deno.permissions.requestSync({ name: "env" });

if (status.state === "granted") {
	console.log("'env' permissions granted");
} else {
	console.error("'env' permissions denied");
}

const readStatus = await Deno.permissions.query({ name: "read", path: "/etc" });

console.log(readStatus.state);

import { assert } from "@std/assert";

const runStatus = await Deno.permissions.revoke({ name: "run" });

assert(runStatus.state !== "granted");
