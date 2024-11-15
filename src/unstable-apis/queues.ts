interface Notification {
	forUser: string;
	body: string;
}

const kv = await Deno.openKv();

const message: Notification = {
	forUser: "alovelace",
	body: "You've got mail!",
};

await kv.enqueue(message);

const delay = 1000 * 60 * 60 * 24 * 3;
await kv.enqueue(message, { delay });

const backupKey = ["failed_notifications", "alovelace", Date.now()];

await kv.enqueue(message, { keysIfUndelivered: [backupKey] });

const r = await kv.get<Notification>(backupKey);
console.log(`Found failed notification for: ${r.value?.forUser}`);

kv.listenQueue((msg: Notification) => {
	console.log(`Dear ${msg.forUser}: ${msg.body}`);
});
