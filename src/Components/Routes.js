import React, {Component} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Home_L from './Home_L';
import Main_L from "./Main_L";
import AboutMe from './AboutMe';
import AboutMe_L from './AboutMe_L';
import Experience from './Experience';
import Achievements from './Achievements';
import Home from './Home';
import Projects from './Projects_L';
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
                    <Route path="/achievements" component={Achievements} />
                </Switch>   
            );
        }
        else if(this.state.width >=770){
            return (
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/main" component={Main_L} />
                    <Route path="/aboutMe" component={AboutMe}/> 
                    <Route path="/projects" component={Projects}/>
                    <Route path="/achievements" component={Achievements} />
                    <Route path="/experience" component={Experience} />
                    <Route path ="/home" component={Home} />
                    <Redirect to="/main" />
                </Switch>   
            );
        }
    }
}

export default Routes;
