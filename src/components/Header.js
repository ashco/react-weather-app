var React = require('react');
var ZipcodeContainer = require('./ZipcodeContainer');

class Header extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <h1>Clever Title</h1>
        <ZipcodeContainer flexDirection='row'/>
      </div>
    )
  }
}

module.exports = Header;