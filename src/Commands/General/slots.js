const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "spin",
    description: "spin for jackpot",
    dm_permissions: "0",
  },
  async execute(interaction) {
    const result = Math.floor(Math.random() * 7) + 1;
    const result2 = Math.floor(Math.random() * 7) + 1;
    const result3 = Math.floor(Math.random() * 7) + 1;

    const embed = new EmbedBuilder()
      .setTitle("Slots")
      .addFields([{ name: "Result spin", value: `[${result} | ${result2} | ${result3}]` }])
      .setColor("#FFD133");

    await interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
