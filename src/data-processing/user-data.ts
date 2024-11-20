import { omit, partition, pick } from "@std/collections";

type User = {
	id: number;
	name: string;
	role: string;
	age: number;
	country: string;
};

const users: User[] = [
	{ id: 1, name: "Alice", role: "admin", age: 30, country: "USA" },
	{ id: 2, name: "Bob", role: "user", age: 25, country: "Canada" },
	{ id: 3, name: "Charlie", role: "user", age: 28, country: "USA" },
	{ id: 4, name: "Dave", role: "admin", age: 35, country: "Canada" },
	{ id: 5, name: "Eve", role: "user", age: 22, country: "UK" },
];

const pickedUsers = users.map((user) => pick(user, ["id", "name", "country"]));

console.log("Picked user data:", pickedUsers);

const omitUsers = users.map((user) => omit(user, ["id"]));

console.log("Omitted user data: ", omitUsers);

const [admin, regularUsers] = partition(users, (user) => user.role === "admin");
console.log("Admins: ", admin);
console.log("Regular Users", regularUsers);