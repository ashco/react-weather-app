var React = require('react');
var ZipcodeContainer = require('./ZipcodeContainer');

class Main extends React.Component {
  render () {
    return (
      <div className="home-container">
        <h1 className="header">Enter a City and State</h1>
        <ZipcodeContainer flexDirection='column'/>
      </div>
    )
  }
}

module.exports = Main;