import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardImg, CardImgOverlay, Button } from 'reactstrap';
import Main from './Main';
import Home_L from './Home_L';
import AboutMe_L from './AboutMe_L';

class Desktop_L extends Component {

    constructor(props) {
        super(props);

        var today = new Date(),
            getDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        var today = new Date(),
            getTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        this.state = {
            redirect: false,
            date: getDate,
            time: getTime,
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
        alert(target);
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
                return( <AboutMe_L/> )
            } else if(this.state.achievements){
                return( <AboutMe_L/> )
            } else if(this.state.experience){
                return( <AboutMe_L/> )
            } else if(this.state.contactMe){
                return( <AboutMe_L/> )
            } 
        }
        return (
            <div className="border_grey">
                <Card>
                    <CardImg src="images\wallpaper1.jpg" className="background_l border_grey">
                    </CardImg>
                    <CardImgOverlay>
                        <div className="row mt-3 ml-3">
                            <div className="zoom">
                                <img src="images\Folder.png" className="folder" id="home" onClick={this.redirect}></img>
                                <h6 className="text-light d-flex justify-content-center mr-2"> Home </h6>
                            </div>
                            <div className="zoom">
                                <img src="images\Folder.png" id="aboutMe" className="folder ml-5" onClick={this.redirect}></img>
                                <h6 className="text-light d-flex justify-content-center ml-5">About Me</h6>
                            </div>
                        </div>
                        <div className="row mt-3 ml-3">
                            <div className="zoom">
                                <img src="images\Folder.png" id="projects" className="folder" onClick={this.redirect}></img>
                                <h6 className="text-light  d-flex justify-content-center"> Projects </h6>
                            </div>
                            <div className="zoom">
                                <img src="images\Folder.png" id="achievements" className="folder ml-5" onClick={this.redirect}></img>
                                <h6 className="text-light d-flex justify-content-center ml-5">Achievements </h6>
                            </div>
                        </div>
                        <div className="row mt-3 ml-3">
                            <div className="zoom">
                                <img src="images\Folder.png" id="experience" className="folder" onClick={this.redirect}></img>
                                <h6 className="text-light  d-flex justify-content-center"> Experience </h6>
                            </div>
                            <div className="zoom">
                                <img src="images\Folder.png" id="contactMe" className="folder ml-4" onClick={this.redirect}></img>
                                <h6 className="text-light d-flex justify-content-center ml-4">Contact Me </h6>
                            </div>
                        </div>
                        <div className="text-light date_time border-none">
                            <h6 className="d-flex justify-content-end mt-5">{this.state.date}</h6>
                            <h6 className="d-flex justify-content-end ">{this.state.time}</h6>
                        </div>
                    </CardImgOverlay>

                </Card>

            </div>
        );
    }
}

export default Desktop_L;
