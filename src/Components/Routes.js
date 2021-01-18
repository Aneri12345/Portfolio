import React, {Component} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Home_L from './Home_L';
import Main_L from "./Main_L";
import AboutMe_L from './AboutMe_L';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    render() {
        if(this.state.width < 790 || this.state.height<550){
            return (
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/aboutMe" component={AboutMe_L}/>
                    <Redirect to="/aboutMe" />
                </Switch>   
            );
        }
        else if(this.state.width >=770){
            return (
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/home" component={Home_L} />
                    <Route path="/main" component={Main_L} />
                    <Redirect to="/main" />
                </Switch>   
            );
        }
    }
}

export default Routes;
