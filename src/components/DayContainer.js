var React = require('react');
var PropTypes = require('prop-types');
var moment = require('moment');
var svg01d = require('../images/weather-icons/01d.svg');
var svg01n = require('../images/weather-icons/01n.svg');
var svg02d = require('../images/weather-icons/02d.svg');
var svg02n = require('../images/weather-icons/02n.svg');
var svg03d = require('../images/weather-icons/03d.svg');
var svg03n = require('../images/weather-icons/03n.svg');
var svg04d = require('../images/weather-icons/04d.svg');
var svg04n = require('../images/weather-icons/04n.svg');
var svg09d = require('../images/weather-icons/09d.svg');
var svg09n = require('../images/weather-icons/09n.svg');
var svg10d = require('../images/weather-icons/10d.svg');
var svg10n = require('../images/weather-icons/10n.svg');
var svg11d = require('../images/weather-icons/11d.svg');
var svg11n = require('../images/weather-icons/11n.svg');
var svg13d = require('../images/weather-icons/13d.svg');
var svg13n = require('../images/weather-icons/13n.svg');
var svg50d = require('../images/weather-icons/50d.svg');
var svg50n = require('../images/weather-icons/50n.svg');

var svgArr = [svg01d, svg01n, svg02d, svg02n, svg03d, svg03n, svg04d, svg04n, svg09d, svg09n, svg10d, svg10n, svg11d, svg11n, svg13d, svg13n, svg50d, svg50n];

class DayContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      img: null,
      subheader: ''
    }
  }


  componentDidMount () {
    this.createImg(this.props.icon);
    this.createDate(this.props.unixTime);
  }


  createImg (icon) {
    var imgIndex = svgArr.findIndex(function (img) {
      return img.includes(icon);
    });
    var img = svgArr[imgIndex];

    this.setState(function () {
      return {
        img: img
      }
    })
  }


  createDate (unix) {
    var day = moment.unix(unix).format('dddd, MMM D');

    this.setState(function () {
      return {
        subheader: day
      }
    })
  }


  render () {
    return (
      <div className="day-container">
        <img
          src={this.state.img}
          alt={this.props.alt}
          className="weather"
          />
        <h2 className='subheader'>{this.state.subheader}</h2>
      </div>
    )
  }
}

DayContainer.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  unixTime: PropTypes.number.isRequired
}

module.exports = DayContainer;