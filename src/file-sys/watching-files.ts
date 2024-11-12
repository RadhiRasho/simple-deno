let watcher = Deno.watchFs("./");

for await (const event of watcher) {
	console.log(">>> Event", event);

	watcher.close();
}

import { debounce } from "@std/async";

const log = debounce((event: Deno.FsEvent) => {
	console.log("[%s] %s", event.kind, event.paths[0]);
}, 200);

watcher = Deno.watchFs("./");

for await (const event of watcher) {
	log(event);
}

watcher.close();