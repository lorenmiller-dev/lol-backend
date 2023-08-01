const mongoose = require("mongoose");

const summonerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  accountId: { type: String, required: true },
  puuid: { type: String, required: true },
  profileIconId: Number,
  revisionDate: Number,
  summonerLevel: Number,
});

summonerSchema.statics.findByName = function (name) {
  // Create a case-insensitive regular expression for the name
  const nameRegex = new RegExp(name, "i");

  // Use the $regex operator in the query to perform a case-insensitive search
  return this.findOne({ name: { $regex: nameRegex } });
};

const Summoner = mongoose.model("Summoner", summonerSchema);

module.exports = Summoner;
