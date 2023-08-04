const mongoose = require("mongoose");

const summonerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  accountId: { type: String, required: true },
  puuid: { type: String, required: true },
  profileIconId: Number,
  revisionDate: Number,
  summonerLevel: Number,
  stats: [
    {
      leagueId: String,
      summonerId: String,
      queueType: String,
      tier: String,
      rank: String,
      summonerName: String,
      leaguePoints: Number,
      wins: Number,
      losses: Number,
      veteran: Boolean,
      inactive: Boolean,
      freshBlood: Boolean,
      hotStreak: Boolean,
    },
  ],
});

summonerSchema.statics.findByName = function (name) {
  // Create a case-insensitive regular expression for the name
  const nameRegex = new RegExp(name, "i");

  // Use the $regex operator in the query to perform a case-insensitive search
  return this.findOne({ name: { $regex: nameRegex } });
};

const Summoner = mongoose.model("Summoner", summonerSchema);

module.exports = Summoner;

/**
 * {
        "leagueId": "d4c11604-8c77-41ce-8af4-486c150c4614",
        "queueType": "RANKED_SOLO_5x5",
        "tier": "SILVER",
        "rank": "IV",
        "summonerId": "urlL8vJQwFahyKV-3YKvXwJOnvlRV08oGtbj2-yWSQP1jwlU",
        "summonerName": "PreciseJR",
        "leaguePoints": 0,
        "wins": 6,
        "losses": 4,
        "veteran": false,
        "inactive": false,
        "freshBlood": false,
        "hotStreak": false
    },
    {
        "queueType": "CHERRY",
        "summonerId": "urlL8vJQwFahyKV-3YKvXwJOnvlRV08oGtbj2-yWSQP1jwlU",
        "summonerName": "PreciseJR",
        "leaguePoints": 0,
        "wins": 51,
        "losses": 48,
        "veteran": false,
        "inactive": false,
        "freshBlood": true,
        "hotStreak": false
    }
 */
