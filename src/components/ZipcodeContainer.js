var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class ZipcodeContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        input: value
      }
    })
  }

  // handleSubmit (event) {
  //   event.preventDefault();
  //   // this.props.onSearch(this.state.input);
  // }

  render () {
    var input = this.state.input;
    // var match = this.props.match;

    return (
      <form
        className='zipcode-container'
        style={{ flexDirection: this.props.flexDirection }}
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          className='form-control'
          placeholder='Seattle, Washington'
          onChange={this.handleChange} />

        {/* <button
          className='btn btn-success'
          type='submit'
          disabled={!this.state.input}>
          Get Weather
        </button> */}

        <Link
          className='btn btn-success'
          to={{
            pathname: '/forecast',
            search: '?city=' + input
          }}>
          Get Weather
        </ Link>
      </form>
    )
  }
}

ZipcodeContainer.propTypes = {
  flexDirection: PropTypes.string.isRequired,
  // onSearch: PropTypes.func.isRequired
}

module.exports = ZipcodeContainer;