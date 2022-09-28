/* eslint-disable prettier/prettier */
const axios = require("axios");

export async function getDados(){
    return axios.get("https://www.freetogame.com/api/games");
}