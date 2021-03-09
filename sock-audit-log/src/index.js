require("dotenv").config();
const { Client } = require("discord.js");
const client = new Client();

require("./core/loadWidgetListeners")(client);

client.on("ready", () => {
	const channel = client.channels.cache.get("818224012811436052");
	if (!channel) return console.error("The channel does not exist!");
	channel.join().then(connection => {
		// Yay, it worked!
		console.log("Successfully connected.");
	}).catch(e => {

		// Oh no, it errored! Let's log it to console :)
		console.error(e);
	});
});

client.login(process.env.DISCORD_BOT_TOKEN);
