# lol-backend

Node.js/Express backend API for a League of Legends player stat tracking web app.

## Endpoints

- GET /:name - Fetch profile data for a given summoner
- GET /:name/matches - Get recent match history for summoner
- GET /:name/matches/:matchId - Get timeline data and stats for a match  

## Usage

\`\`\`
npm install
npm start
\`\`\`

MongoDB is used to cache match data. Configure MongoDB connection string in config.js.

