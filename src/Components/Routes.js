import React, {Component} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Home_L from './Home_L';
import Main_L from "./Main_L";
import AboutMe from './AboutMe';
import AboutMe_L from './AboutMe_L';
import Experience from './Experience';
import Achievements from './Achievements';
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
        if(this.state.width < 990 || this.state.height<550){
            return (
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/aboutMe" component={AboutMe}/>
                    <Route path="/achievements" component={Achievements} />
                    <Redirect to="/aboutMe" />
                </Switch>   
            );
        }
        else if(this.state.width >=770){
            return (
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/main" component={Main_L} />
                    <Route path="/aboutMePopout" component={AboutMe}/> 
                    <Route path="/achievements" component={Achievements} />
                    <Route path="/experience" component={Experience} />
                    <Redirect to="/main" />
                </Switch>   
            );
        }
    }
}

export default Routes;
