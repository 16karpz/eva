const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("👋"),
    async execute(interaction) {
        await interaction.reply("👋");
    }
};