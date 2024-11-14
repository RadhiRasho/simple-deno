import { retry, RetryError, type RetryOptions } from "@std/async";

function fn() {
	console.log("hello world");
	return Promise.reject("Rejected");
}

const options: RetryOptions = {
	maxAttempts: 3,
	minTimeout: 10,
	multiplier: 2,
	jitter: 0,
};

try {
	await retry(fn, options);
} catch (err) {
	if (err instanceof RetryError) {
		console.log("Retry error :", err.message);
		console.log("Error cause :", err.cause);
	}
}
