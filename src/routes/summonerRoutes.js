// routes/summoner.js
const express = require("express");
const router = express.Router();
const summonerController = require("../controllers/summonerController");
const matchController = require("../controllers/matchController");

router.get("/:name", summonerController.getSummoner);
router.get("/:name/matches", matchController.getMatchHistory);

// router.get("/:name/matches", summonerController.getMatchHistory);

// router.get("/:name/info", summonerController.getSummonerStats);

module.exports = router;
