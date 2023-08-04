const RiotAPI = require("./riotAPI");
const Summoner = require("../models/Summoner");

async function getSummoner(name) {
  try {
    const summoner = await RiotAPI.getSummoner(name);

    let existingSummoner = await Summoner.findByName(name);

    if (!existingSummoner) {
      await Summoner.create(summoner);
    }

    if (!existingSummoner.stats || existingSummoner.stats.length === 0) {
      const stats = await RiotAPI.getSummonerStats(summoner.id);

      existingSummoner.stats = stats;
      await existingSummoner.save();
    }

    // Debug logs
    console.log("Summoner from Riot API:", summoner);
    // console.log("Update Summoner Info: ", updateSummoner);
    console.log("Existing Summoner from DB:", existingSummoner);

    // Return the summoner data
    return existingSummoner;
  } catch (error) {
    console.error("Error in getSummoner:", error);
    throw error;
  }
}

module.exports = {
  getSummoner,
};
