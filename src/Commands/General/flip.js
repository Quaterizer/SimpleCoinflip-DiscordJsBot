const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "flip",
    description: "Flip your coin",
    dm_permissions: "0",
  },
  async execute(interaction) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

    const embed = new EmbedBuilder()
      .setTitle("Coin Flipped")
      .addFields([
        { name: "Result is", value: `${result}` },
      ])
      .setColor("#FFD133");

    await interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
