const a = await Deno.resolveDns("example.com", "A");

console.log(a);

const mx = await Deno.resolveDns("example.com", "MX");
console.log(mx);

const aaaa = await Deno.resolveDns("example.com", "AAAA", {
	nameServer: { ipAddr: "8.8.8.8" },
});
console.log(aaaa);