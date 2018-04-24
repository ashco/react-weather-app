import React, { Component } from 'react';
import backgroundImg from '../images/pattern.svg';
var Header = require('./Header');
var Main = require('./Main');
var Forecast = require('./Forecast');
var api = require('../utils/api');


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      location: '',
      weatherData: null
      // weatherData0: null,
      // weatherData1: null,
      // weatherData2: null,
      // weatherData3: null,
      // weatherData4: null
    }

    this.searchWeather = this.searchWeather.bind(this);
  }

  searchWeather (location) {

    this.setState(function () {
      return {
        location: location
      }
    });

    api.getWeather(location)
      .then(function (results) {
        var weatherData = results.filter(function (result, index) {
          return index % 8 === 0;
        });


        this.setState(function () {
          return {
            weatherData: weatherData
            // weatherData0: weatherData[0],
            // weatherData1: weatherData[1],
            // weatherData2: weatherData[2],
            // weatherData3: weatherData[3],
            // weatherData4: weatherData[4]
          }
        })
        console.log(this.state);
      }.bind(this))
      .catch(function (error) {
        console.warn('No location data provided. Please panic.');
        return null;
      })
  }

  render() {



    return (
      <div className="App">
        <Header onSearch={this.searchWeather}/>
        {!this.state.location
          ? <Main onSearch={this.searchWeather} backgroundImg={backgroundImg} />
          : <Forecast location={!this.state.weatherData ? 'Loading' : this.state.location} data={this.state.weatherData}/>}

      </div>
    );
  }
}

export default App;
