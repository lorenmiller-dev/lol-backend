// Load environment variables
require("dotenv").config();

const riotAPIKey = process.env.RIOT_API_KEY;
const port = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const mongo_uri = process.env.MONGODB_URI;
const NA_URL = process.env.NA1_URL;
const MATCHES_URL = process.env.MATCH_URL;

module.exports = {
  riot: {
    apiKey: riotAPIKey,
  },

  ports: {
    port: port,
  },

  db: {
    username: username,
    password: password,
    uri: mongo_uri,
  },

  url: {
    na1: NA_URL,
    getMatches: MATCHES_URL,
  },
};
