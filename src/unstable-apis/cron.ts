Deno.cron("Log a message", "* * * * *", () => {
	console.log("This will pring once a minute");
});

Deno.cron(
	"Retry example",
	"* * * * *",
	{
		backoffSchedule: [1000, 5000, 10000],
	},
	() => {
		throw new Error("Deno.cron will retry this three times, to no avail!");
	},
);
