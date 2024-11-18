function* gen() {
	for (let i = 0; i < 10; i++) {
		yield i;
	}
}

const iterator = gen();
const intervalId = setInterval(() => {
	const data = iterator.next();

	if (data.done) clearInterval(intervalId);

	console.log(data);
}, 10000);
