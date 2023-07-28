// controllers/summonerController.js

const RiotAPI = require("../services/riotAPI");

async function getSummoner(req, res) {
  try {
    const { name } = req.params;

    // validate name
    if (!name) {
      return res.status(400).json({ error: "Name required" });
    }

    // Call riot API
    const summoner = await RiotAPI.getSummoner(name);

    // Handle 404 from API
    if (!summoner) {
      return res.status(404).json({ error: "Summoner not found" });
    }

    // Return summoner
    res.json(summoner);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function getMatchHistory(req, res, next) {
  try {
    // Get name from params
    const { name } = req.params;

    // Validate
    if (!name) {
      return res.status(400).json({ error: "Name required" });
    }

    // Get summoner
    console.log(`Fetching summoner ${name}`);

    let summoner;

    summoner = await RiotAPI.getSummoner(name);

    console.log(summoner);

    // Handle 404
    if (!summoner) {
      return res.status(404).json({ error: "Summoner not found" });
    }

    // Get PUUID
    const { puuid } = summoner;

    console.log("PUUID:", puuid);
    console.log(typeof puuid);

    // Get matchlist
    console.log(`Fetching matches for ${name}`);

    const matches = await RiotAPI.getMatchList(puuid);

    // Return matches

    res.json(matches);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getSummoner,
  getMatchHistory,
};
