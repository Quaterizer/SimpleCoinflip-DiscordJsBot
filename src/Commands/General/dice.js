const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "diceroll",
    description: "Roll The Dice",
    dm_permissions: "0",
  },
  async execute(interaction) {
    const result = Math.floor(Math.random() * 6) + 1;
    const result2 = Math.floor(Math.random() * 6) + 1;

    const embed = new EmbedBuilder()
      .setTitle("Dice rolled")
      .addFields([{ name: "First Result is", value: `${result}` }])
      .addFields([{ name: "Second Result is", value: `${result2}` }])
      .setColor("#FFD133");

    await interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
