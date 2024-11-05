console.log("Counting Seconds...");

let i = 0;

function sigIntHanlder() {
	console.log("interrupted! your number was", i);
	Deno.exit();
}

Deno.addSignalListener("SIGINT", sigIntHanlder);

const interval = setInterval(() => {
	i++;
}, 1000);

setTimeout(() => {
	clearInterval(interval);

	Deno.removeSignalListener("SIGINT", sigIntHanlder);
	console.log("Done! it has been 10 seconds");
}, 10_000);
