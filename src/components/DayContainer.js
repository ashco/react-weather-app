var React = require('react');

class DayContainer extends React.Component {
  componentDidMount () {
    var icon = this.props.icon;
    var alt = this.props.alt;
    var unixTime = this.props.unixTime;
  }

  render () {
    return (
      <div className="day-container">
        <img
          src='../images/weather-icons/10d.svg'
          alt={this.alt}
          className="weather"/>
        <h2 className='subheader'>Hi</h2>
      </div>
    )
  }
}

module.exports = DayContainer;