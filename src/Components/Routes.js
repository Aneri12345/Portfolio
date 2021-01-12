import React, {Component} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Home_L from './Home_L';
import Main from "./Main";
class Routes extends Component {
    render() {
        return (
            <Switch location={window.location} key={window.location.pathname}>
                <Route path="/home" component={Home_L} />
                <Route path="/main" component={Main} />
                <Redirect to="/main" />
            </Switch>
        );
    }
}

export default Routes;
