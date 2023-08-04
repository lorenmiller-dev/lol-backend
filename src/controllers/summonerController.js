const riotAPI = require("../services/riotAPI");
const summonerService = require("../services/summonerService");

async function getSummoner(req, res) {
  const { name } = req.params;

  // validate name
  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  try {
    const summoner = await summonerService.getSummoner(name);

    if (!summoner) {
      return res.status(404).json({ error: "Summoner not found" });
    }

    res.json(summoner);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getSummoner,
};
