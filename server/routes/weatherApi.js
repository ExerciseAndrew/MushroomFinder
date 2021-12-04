const axios = require('axios');
// const TOKEN = require('../config.js');


const getWeather = (id) =>

  axios({
    method: 'get',
    url: `//api.openweathermap.org/data/2.5/weather`,
    params: {
      zip: id,
      appid:'d70a4cf2a3544153f7bb20a501892692'
    },
    // headers: {
    //   'Authorization': //TOKEN.TOKEN
    // }
  })

module.exports = {
  getWeather
}