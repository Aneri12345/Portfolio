import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardImg, CardImgOverlay, Button } from 'reactstrap';
import Main_L from './Main_L';
import Home_L from './Home_L';
import AboutMe_L from './AboutMe_L';
import ContactMe_L from './ContactMe_L';
import Projects from './Projects_L';
import Achievements_L from './Achievements_L';
import Experience_L from './Experience_L';

class Desktop_L extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            home: false,
            aboutMe: false,
            projects: false,
            achievements: false,
            experience: false,
            contactMe: false
        }

        this.redirect = this.redirect.bind(this);
    }

    redirect(event) {
        var target = event.target.id;
        this.setState({
            redirect: true,
            [target]: true
        })
    }

    render() {
        if (this.state.redirect) {
            if (this.state.home) {
                return ( <Home_L /> )
            } else if(this.state.aboutMe){
                return( <AboutMe_L/> )
            } else if(this.state.projects){
                return( <Projects/> )
            } else if(this.state.achievements){
                return( <Achievements_L/> )
            } else if(this.state.experience){
                return( <Experience_L/> )
            } else if(this.state.contactMe){
                return( <ContactMe_L/> )
            } 
        }
        return (
            <div style={{overflowX: "hidden"}}>
            <div className="border_grey">
                <Card>
                    <CardImg src="images\wallpaper1.jpg" className="background_l border_grey">
                    </CardImg>
                    <CardImgOverlay>
                        <div className="row mt-3 ml-3">
                            <div className="zoom">
                                <img src="images\Folder.png" className="folder" id="home" onClick={this.redirect}></img>
                                <h6 className="text-dark d-flex justify-content-center mr-2"> Home </h6>
                            </div>
                            <div className="zoom">
                                <img src="images\Folder.png" id="aboutMe" className="folder ml-5" onClick={this.redirect}></img>
                                <h6 className="text-dark d-flex justify-content-center ml-5">About Me</h6>
                            </div>
                        </div>
                        <div className="row mt-3 ml-3">
                            <div className="zoom">
                                <img src="images\Folder.png" id="projects" className="folder" onClick={this.redirect}></img>
                                <h6 className="text-dark  d-flex justify-content-center"> Projects </h6>
                            </div>
                            <div className="zoom">
                                <img src="images\Folder.png" id="achievements" className="folder ml-5" onClick={this.redirect}></img>
                                <h6 className="text-dark d-flex justify-content-center ml-5">Achievements </h6>
                            </div>
                        </div>
                        <div className="row mt-3 ml-3">
                            <div className="zoom">
                                <img src="images\Folder.png" id="experience" className="folder" onClick={this.redirect}></img>
                                <h6 className="text-dark  d-flex justify-content-center"> Experience </h6>
                            </div>
                            <div className="zoom">
                                <img src="images\Folder.png" id="contactMe" className="folder ml-4" onClick={this.redirect}></img>
                                <h6 className="text-dark d-flex justify-content-center ml-4">Contact Me </h6>
                            </div>
                        </div>
                    </CardImgOverlay>
                </Card>

            </div>
            </div>
        );
    }
}

export default Desktop_L;
