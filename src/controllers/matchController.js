const RiotAPI = require("../services/riotAPI");

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