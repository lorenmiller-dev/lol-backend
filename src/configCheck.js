const config = require("./config/default");

// Check required config values
if (!config.riot.apiKey) {
  throw new Error("Missing RIOT_API_KEY in .env");
}

if (!config.ports.port) {
  throw new Error("Missing PORT in .env");
}

if (!config.url.na1) {
  throw new Error("Missing region url in .env");
}

// Print config values
console.log("Loaded config:");
console.log(config.riot.apiKey);
console.log(config.ports.port);
console.log(config.db.username);
console.log(config.db.password);
console.log(config.db.uri);
console.log(config.url.na1);

console.log("Config OK!");
