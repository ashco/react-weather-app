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
  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     location: '',
  //     weatherData: null
  //   }

  //   this.searchWeather = this.searchWeather.bind(this);
  // }



  render() {



    return (
      <Router>
        <div className="App">
          <Header onSearch={this.searchWeather}/>

          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details' component={Details} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
          {/* {!this.state.location
            ? <Main onSearch={this.searchWeather} backgroundImg={backgroundImg} />
            : <Forecast location={!this.state.weatherData ? 'Loading' : this.state.location} data={this.state.weatherData}/>} */}
        </div>
      </Router>
    );
  }
}

export default App;



// /forecast?city=Seattle,%20Washington
// /details/Seattle,%20Washington