const urls = [
	"https://jsonplaceholder.typicode.com/posts/1",
	"https://jsonplaceholder.typicode.com/posts/2",
	"https://jsonplaceholder.typicode.com/posts/3",
	"https://jsonplaceholder.typicode.com/posts/4",
	"https://jsonplaceholder.typicode.com/posts/5",
	"https://jsonplaceholder.typicode.com/posts/6",
	"https://jsonplaceholder.typicode.com/posts/7",
	"https://jsonplaceholder.typicode.com/posts/8",
];

async function* gen() {
	for (const url of urls) {
		yield await (await fetch(url)).json();
	}
}

const iterator = gen();

const intervalId = setInterval(async () => {
	const data = await iterator.next();

	if (data.done) {
		clearInterval(intervalId);
	}

	console.log(data);
}, 10000);