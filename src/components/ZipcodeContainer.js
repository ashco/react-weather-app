var React = require('react');
var PropTypes = require('prop-types');

class ZipcodeContainer extends React.Component {
  render () {
    return (
      <div className='zipcode-container' style={{ flexDirection: this.props.flexDirection }}>
        <input type="text" className='form-control' placeholder='Seattle, Washington' />
        <button className='btn btn-success' type='button'>Get Weather</button>

      </div>
    )
  }
}

ZipcodeContainer.propTypes = {
  flexDirection: PropTypes.string.isRequired
}

module.exports = ZipcodeContainer;