const RiotAPI = require("../services/riotAPI");

async function getSummoner(req, res) {
  const { name } = req.params;

  // validate name
  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  try {
    const summoner = await RiotAPI.getSummoner(name);

    if (!summoner) {
      return res.status(404).json({ error: "Summoner not found" });
    }

    res.json(summoner);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function getMatchHistory(req, res) {
  const { name } = req.params;

  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  try {
    // console.log(`Fetching summoner ${name}`);

    const summoner = await RiotAPI.getSummoner(name);

    // console.log(summoner);

    // Handle 404
    if (!summoner) {
      return res.status(404).json({ error: "Summoner not found" });
    }

    // Get PUUID
    const { puuid } = summoner;

    // console.log("PUUID:", puuid);
    // console.log(typeof puuid);

    // Get matchlist
    console.log(`Fetching matches for ${name}`);

    const matches = await RiotAPI.getMatchList(puuid);

    // Return matches

    res.json(matches);
  } catch (error) {
    // Handle Riot API errors
    if (error.response) {
      return res.status(error.response.status).json({
        message: error.response.statusText,
      });
    } else {
      return res.status(500).json({ message: "API error" });
    }
  }
}

async function getSummonerStats(req, res) {
  const { name } = req.params;

  try {
    const summoner = await RiotAPI.getSummoner(name);

    const { id } = summoner;
    const stats = await RiotAPI.getStats(id);
    res.json(stats);
  } catch (error) {}
}

module.exports = {
  getSummoner,
  getMatchHistory,
  getSummonerStats,
};
