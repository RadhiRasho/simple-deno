import { parse, stringify } from "@std/csv";

let text = `
url,views,likes
https://deno.land,10,7
https://deno.land/x,20,15
https://deno.dev,30,23
`;

let data = parse(text, {
	skipFirstRow: true,
	strip: true,
});

console.log(data);
console.log(data[0].url); // https://deno.land
console.log(data[0].views); // 10
console.log(data[0].likes); // 5

text = `
https://deno.land,10,7
https://deno.land/x,20,15
https://deno.dev,30,23
`;
data = parse(text, {
	columns: ["url", "views", "likes"],
});
console.log(data[0].url); // https://deno.land
console.log(data[0].views); // 10
console.log(data[0].likes); // 7

const obj = [
	{ mascot: "dino", fans: { old: 100, new: 200 } },
	{ mascot: "bread", fans: { old: 5, new: 2 } },
];
const csv = stringify(obj, {
	columns: ["mascot", ["fans", "old"], ["fans", "new"]],
});
console.log(csv);
// mascot,new
// dino,200
// bread,2