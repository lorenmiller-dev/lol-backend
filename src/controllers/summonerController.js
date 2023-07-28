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

module.exports = {
  getSummoner,
};
