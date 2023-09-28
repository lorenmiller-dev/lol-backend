# lol-backend

## Table of Contents
- [Introduction](#introduction)
- [Project Structure Example](#project-structure-example)
- [Endpoints](#endpoints)
- [Usage](#usage)

## Introduction

The backend of our League of Legends stat tracker, powered by Node.js, Express, and MongoDB, serves as the robust foundation for our platform. 

Designed to provide users with comprehensive and up-to-date statistics on summoners, matches, champions, and items, our backend system seamlessly manages data storage, retrieval, and external API interactions. 

Leveraging the power of MongoDB, we store and organize vast amounts of game-related information, while Express facilitates smooth communication between our frontend and backend components. 

With a well-structured directory layout and modular architecture, our backend ensures scalability, maintainability, and high performance, making it an essential part of our League of Legends stat tracking solution.

## Project Structure Example
```
src/
├── config/                    # Configuration settings                    
│   ├── default.js
├── controllers/               # Request handling logic                  
│   ├── summonerController.js
│   ├── matchController.js 
│   ├── championController.js          
│   └── itemController.js  
├── database/                  # Database setup and connections                         
│   └── mongoose.js
├── models/                    # Data structure definitions                   
│   ├── Summoner.js  
│   ├── Match.js 
│   ├── Champion.js       
│   └── Item.js
├── routes/                    # URL routing and mappings                  
│   ├── summonerRoutes.js  
│   ├── matchRoutes.js  
│   ├── championRoutes.js       
│   └── itemRoutes.js
├── services/                  # Business logic and external APIs
│   ├── apis/
│   │   └── riotAPI.js                    
│   ├── summonerService.js
│   ├── matchService.js  
│   ├── championService.js         
│   └── itemService.js
├── Server.js                  # Main application entry point                   
└── configCheck.js             # Configuration validation code   
```
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

