import React, { Component } from 'react';
// import backgroundImg from '../images/pattern.svg';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Header = require('./Header');
var Main = require('./Main');
var Forecast = require('./Forecast');
var Details = require('./Details');



class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details' component={Details} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



// /forecast?city=Seattle,%20Washington
// /details/Seattle,%20Washington