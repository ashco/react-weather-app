var axios = require('axios');

// http://api.openweathermap.org/data/2.5/forecast?q=Seattle,Washington&APPID=d706246e45952ae604390e0e530c6603
var urlStart = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var apiKey = 'd706246e45952ae604390e0e530c6603';


function getData (location) {
  return axios.get(urlStart + location + '&APPID=' + apiKey)
    .then(function (response) {
      return response.data.list;
    })
    .catch(function (error) {
      console.log('ERROR: ' + error);
      return null;
    })
}

// function filterData (weatherData) {

//   console.log(weatherData);
// }

module.exports = {
  getWeather: function (location) {
    return getData(location);
      // .then(function (response) {
        // console.log(response);
      // });
  }
}