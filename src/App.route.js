import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './containers/home';
import { Profile } from './containers/profile';

const AppRoutes = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/profile' component={Profile}></Route>
    </Switch>
);

export default AppRoutes;