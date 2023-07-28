// summonerRoutes.js

const router = require('express').Router();

const summonerController = require('../controllers/summonerController');

router.get('/:name', summonerController.getSummoner);

module.exports = router;