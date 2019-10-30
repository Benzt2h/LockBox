import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import LockerDetail from './containers/lockers/LockerDetail';
import HowItWork from './containers/HowItWork';
import NotFound from './containers/error/NotFound';

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/withdraw/:id" component={LockerDetail} />
        <Route exact path="/deposit/:id" component={LockerDetail} />
        <Route exact path="/howitwork" component={HowItWork} />

        <Route component={NotFound} />
      </Switch>
    )
  }


  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    )
  }
}

export default App;
