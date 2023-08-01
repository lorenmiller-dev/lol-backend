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
  getSummonerStats,
};
