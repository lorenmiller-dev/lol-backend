// routes/summoner.js
const express = require("express");
const router = express.Router();
const summonerController = require("../controllers/summonerController");
const profileController = require("../controllers/profileController");

router.get("/:name", summonerController.getSummoner);

router.get("/:name/matches", summonerController.getMatchHistory);

router.get("/:name/info", summonerController.getSummonerStats);


module.exports = router;
