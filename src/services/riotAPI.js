const axios = require("axios");
const config = require("../config/default");

const base_url = config.url.na1;
const matches_url = config.url.getMatches;
const api_key = config.riot.apiKey;

class RiotAPI {
  async getSummoner(name) {
    try {
      const url = `${base_url}/lol/summoner/v4/summoners/by-name/${name}`;

      const response = await axios.get(url, {
        headers: {
          "X-Riot-Token": api_key,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getMatchList(puuid) {
    try {
      const url = `${matches_url}/lol/match/v5/matches/by-puuid/${puuid}/ids`;

      const params = {
        beginIndex: 0,
        endIndex: 20,
      };

      const response = await axios.get(url, {
        headers: {
          "X-Riot-Token": api_key,
        },
        params,
      });

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = new RiotAPI();
