var React = require('react');
var DayContainer = require('./DayContainer');

class Forecast extends React.Component {
  render () {
    var data = this.props.data;

    return (
      <div>
        <h1 className='forecast-header'>{this.props.location}</h1>
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