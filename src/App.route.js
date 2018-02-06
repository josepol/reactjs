import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './containers/home';
import { Profile } from './containers/profile';
import { Login } from './containers/login';

const AppRoutes = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/login' component={Login}></Route>
    </Switch>
);

export default AppRoutes;