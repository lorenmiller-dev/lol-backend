const axios = require("axios");
const config = require("../config/default");

const base_url = config.url.na1;
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

  async getMatchlist(accountId) {
    try {
      const url = `${BASE_URL}/lol/match/v4/matchlists/by-account/${accountId}`;

      const params = {
        beginIndex: 0,
        endIndex: 20,
      };

      const response = await axios.get(url, {
        headers: {
          "X-Riot-Token": API_KEY,
        },
        params,
      });

      const { data } = response;
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = new RiotAPI();
