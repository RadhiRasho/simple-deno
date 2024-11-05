import * as path from "@std/path";
import * as posix from "@std/path/posix";
import * as windows from "@std/path/windows";

const p1 = posix.fromFileUrl("file:///home/foo");
const p2 = windows.fromFileUrl("file:///home/foo");
console.log(`Posix: ${p1}`);
console.log(`Windows: ${p2}`);

const p3 = path.fromFileUrl("file:///home/foo");
console.log(`Path on current OS: ${p3}`);

const p = path.basename("./deno/is/awesome/mod.ts");
console.log(p); // mod.ts

const base = path.dirname("./deno/is/awesome/mod.ts");
console.log(base); // ./deno/is/awesome

const ext = path.extname("./deno/is/awesome/mod.ts");
console.log(ext); // .ts

const formatPath = path.format({
	root: "/",
	dir: "/home/user/dir",
	ext: ".html",
	name: "index",
});

console.log(formatPath); // /home/user/dir/index.html

const joinPath = path.join("foo", "bar");
console.log(joinPath); // foo/bar

const current = Deno.cwd();
console.log(current); // Current working directory
