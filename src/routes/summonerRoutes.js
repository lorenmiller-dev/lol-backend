// routes/summoner.js
const express = require("express");
const router = express.Router();
const summonerController = require("../controllers/summonerController");

router.get("/:name", summonerController.getSummoner);

router.get("/:name/matches", summonerController.getMatchHistory);

module.exports = router;
