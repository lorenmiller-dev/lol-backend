const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  metadata: {
    matchId: { type: String, required: true },
    participants: [{ type: [String], required: true }],
  },

  info: {
    gameCreation: { type: Number, required: true },
    gameDuration: { type: Number, required: true },
    gameEndTimestamp: { type: Number, required: true },
    gameId: { type: Number, required: true },
    gameMode: { type: String, required: true },
    gameName: { type: String, required: true },
    gameType: { type: String, required: true },
    mapId: { type: Number, required: true },
    participants: [
      {
        challenges: {
          kda: Number,
        },

        // champion
        champLevel: { type: Number, required: true },
        championId: { type: Number, required: true },
        championName: { type: String, required: true },

        // items
        item0: { type: Number, required: true },
        item1: { type: Number, required: true },
        item2: { type: Number, required: true },
        item3: { type: Number, required: true },
        item4: { type: Number, required: true },
        item5: { type: Number, required: true },
        item6: { type: Number, required: true },

        // stats
        kills: { type: Number, required: true },
        deaths: { type: Number, required: true },
        assists: { type: Number, required: true },
        totalDamageDealtToChampions: { type: Number, required: true },
        totalMinionsKilled: { type: Number, required: true },
        visionScore: { type: Number, required: true },

        // position
        lane: { type: String, required: true },
        teamPosition: String,
        role: { type: String, required: true },

        // participant
        participantId: { type: Number, required: true },
        summonerId: { type: String, required: true },
        summonerName: { type: String, required: true },

        // win or loss
        win: { type: Boolean, required: true },
      },
    ],
  },
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
