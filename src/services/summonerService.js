const RiotAPI = require("./riotAPI");
const Summoner = require("../models/Summoner");

async function getSummoner(name) {
  try {
    const summoner = await RiotAPI.getSummoner(name);

    const existingSummoner = await Summoner.findByName(name);

    if (!existingSummoner) {
      await Summoner.create(summoner);
    }

    // Debug logs
    console.log("Summoner from Riot API:", summoner);
    console.log("Existing Summoner from DB:", existingSummoner);

    // Return the summoner data
    return summoner;
  } catch (error) {
    console.error("Error in getSummoner:", error);
    throw error;
  }
}

module.exports = {
  getSummoner,
}

