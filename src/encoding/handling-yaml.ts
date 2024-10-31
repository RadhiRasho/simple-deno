import { parse, stringify } from "@std/yaml";

const text = `
foo: bar
baz:
  - qux
  - quux
`;

interface ParsedData {
  foo?: string;
  baz?: string[];
}

const data = parse(text) as ParsedData;

console.log(data.foo);
console.log(data.baz?.length);

const obj = {
  hello: "world",
  numbers: [1, 2, 3],
};

const yaml = stringify(obj);

console.log(yaml);
// hello: word
// numbers:
//   - 1
//   - 2
//   - 3
