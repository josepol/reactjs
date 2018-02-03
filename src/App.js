import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './containers/home';
import { Profile } from './containers/profile';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/profile' component={Profile}></Route>
      </Switch>
    );
  }
}

export default App;
