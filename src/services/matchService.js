const RiotAPI = require("./riotAPI");
const Summoner = require("../models/Summoner");
const Match = require("../models/Match");

async function getMatchList(puuid) {
  try {
    console.log("Fetching match list for PUUID:", puuid);
    const matchList = await RiotAPI.getMatchList(puuid);
    console.log("Match list:", matchList);
    return matchList;
  } catch (error) {
    console.error("Error in getMatchList:", error);
    throw error;
  }
}

async function getMatchInfo(matchId) {
  try {
    // Check if the match exists in the database
    const existingMatch = await Match.findOne({ "metadata.matchId": matchId });

    if (!existingMatch) {
      // If the match doesn't exist in the database, fetch it from the Riot API
      const match = await RiotAPI.getMatchInfo(matchId);

      // Save the fetched match to the database
      const newMatch = new Match(match);
      await newMatch.save();

      // Debug log
      console.log(
        "Match fetched from Riot API and saved to the database:",
        match
      );

      // Return the fetched match
      return match;
    } else {
      // If the match exists in the database, return it
      console.log("Match found in the database:", existingMatch);
      return existingMatch;
    }
  } catch (error) {
    console.error("Error in getMatchInfo:", error);
    throw error;
  }
}

module.exports = {
  getMatchList,
  getMatchInfo,
};
