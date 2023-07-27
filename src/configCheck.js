// Require dotenv and config
require("dotenv").config();
const config = require("./config/default");

// Check required config values
if (!config.riot.apiKey) {
  throw new Error("Missing RIOT_API_KEY in .env");
}

if (!config.port) {
  throw new Error("Missing PORT in .env");
}

/**
// Check optional configs
if(!config.db.url) {
  console.warn('DB_URL not set, using in-memory DB');
}
 */

// Print config values
console.log("Loaded config:");
console.log(config);

console.log("Config OK!");
