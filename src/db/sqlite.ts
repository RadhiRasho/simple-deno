import { Database } from "@db/sqlite";

const db = new Database(":memory:");

db.prepare(
	`
	CREATE TABLE IF NOT EXISTS people (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT,
	  age INTEGER
	);
  `,
).run();

db.prepare("INSERT INTO people (name, age) VALUES (?, ?);").run("Bob", 40);

const rows = db.prepare("SELECT id, name, age FROM people").all();

console.log("People:");

for (const row of rows) {
	console.log(row);
}

db.close();
