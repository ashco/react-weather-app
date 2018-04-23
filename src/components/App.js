import React, { Component } from 'react';
import backgroundImg from '../images/pattern.svg';
var Header = require('./Header');
var Main = require('./Main');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main backgroundImg={backgroundImg} />
      </div>
    );
  }
}

export default App;
