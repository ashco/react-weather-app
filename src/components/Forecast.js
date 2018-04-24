var React = require('react');
var DayContainer = require('./DayContainer');
var queryString = require('query-string');
var api = require('../utils/api');

class Forecast extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: '',
      weatherData: null
    }
  }

  updateWeather () {
    var location = queryString.parse(this.props.location.search);

    this.setState(function () {
      return {
        location: location.city
      }
    });

    api.getWeather(location.city)
      .then(function (results) {
        var weatherData = results.filter(function (result, index) {
          return index % 8 === 0;
        });

        this.setState(function () {
          return {
            weatherData: weatherData
          }
        })
        console.log(this.state);
      }.bind(this))
      .catch(function (error) {
        console.warn('No location data provided. Please panic.');
        return null;
      })
  }

  componentDidMount () {
    this.updateWeather();
  }

  // componentDidUpdate () {
  //   this.updateWeather();
  // }

  render () {
    var data = this.state.weatherData;

    return (
      <div>
        <h1 className='forecast-header'>{this.state.location}</h1>
        <div className='forecast-container'>
          {!data ? '' : data.map(function(day, index) {
            console.log(day);
            return (
              <DayContainer
                key={index}
                icon={day.weather[0].icon}
                alt={day.weather[0].main}
                unixTime={day.dt} />
            )
          })}
        </div>
      </div>
    )
  }
}

module.exports = Forecast;