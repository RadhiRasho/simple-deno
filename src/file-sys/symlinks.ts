await Deno.writeTextFile("example.txt", "Hello from symlink!");

await Deno.symlink("example.txt", "link");

console.log(await Deno.realPath("link"));

console.log(await Deno.readTextFile("link"));

await Deno.link("example.txt", "hardlink");

console.log(await Deno.readTextFile("hardlink"));
