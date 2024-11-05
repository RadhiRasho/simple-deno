const PORT = Deno.env.get("PORT");

console.log("PORT: ", PORT);

let env = Deno.env.toObject();
console.log("Env: ", env);

Deno.env.set("MY_PASSWORD", "H");

env = Deno.env.toObject();
console.log("Env: ", env.MY_PASSWORD);

Deno.env.delete("MY_PASSWORD");

env = Deno.env.toObject();
console.log("Env: ", env.MY_PASSWORD);

Deno.env.set("MY_PASSWORD", "H");
Deno.env.set("my_password", "R");
console.log("UPPERCASE: ", Deno.env.get("MY_PASSWORD"));
console.log("lowercase: ", Deno.env.get("my_password"));
