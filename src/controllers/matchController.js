const matchService = require("../services/matchService");
const summonerService = require("../services/summonerService");

async function getMatchHistory(req, res) {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({ error: "Name required" });
    }

    // console.log(`Fetching summoner ${name}`);

    const summoner = await summonerService.getSummoner(name);

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
    // console.log(`Fetching matches for ${name}`);

    const matches = await matchService.getMatchList(puuid);

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

async function getMatchById(req, res) {
  try {
    const { matchId } = req.params;

    if (!matchId) {
      return res.status(400).json({ error: "Match ID required" });
    }

    // Fetch the match by its ID
    const match = await matchService.getMatchInfo(matchId);

    // Handle 404 if match not found
    if (!match) {
      return res.status(404).json({ error: "Match not found" });
    }

    // Return the match details
    res.json(match);
  } catch (error) {
    // Handle errors
    return res.status(500).json({ message: "Server error" });
  }
}
module.exports = {
  getMatchHistory,
  getMatchById,
};
