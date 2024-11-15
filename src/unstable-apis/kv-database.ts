const kv = await Deno.openKv();

enum Rank {
	Bronze = 0,
	Silver = 1,
	Gold = 2,
}

interface Player {
	username: string;
	rank: Rank;
}

const player1: Player = { username: "carlos", rank: Rank.Bronze };
const player2: Player = { username: "briana", rank: Rank.Silver };
const player3: Player = { username: "alice", rank: Rank.Bronze };

await kv.set(["players", player1.username], player1);
await kv.set(["players", player2.username], player2);
await kv.set(["players", player3.username], player3);

console.log(
	"Players",
	await kv.getMany([
		["players", player1.username],
		["players", player2.username],
		["players", player3.username],
	]),
);

player3.rank = Rank.Gold;

await kv.set(["Players", player3.username], player3);

console.log("Players", await kv.get(["players", player3.username]));
