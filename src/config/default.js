// 
require('dotenv').config();

const config = require('./config/default');

module.exports = {
  riot: {
    apiKey: process.env.RIOT_API_KEY
  },

  ports: {
    port: process.env.PORT
  },

  db: {
    dbURL: process.env.DB_URL
  }
}