import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardHeader, Button, CardBody, CardImg } from 'reactstrap';
import Desktop_L from './Desktop_L';
import AboutMe from './AboutMe';
import Header from './Header';
class AboutMe_L extends Component {

    constructor(props) {
        super(props);
        this.state = {
            back: false,
            popout: false,
        }

    }

    render() {
        return (
            <div style={{ height: "100%", width: "100%", overflowX:"hidden", overflowY:"auto"}} >
                <Header/>
                <div className="bg_header">
                    <div style={{ height: "150vh", width: "100%" }} className="bg_dp">
                        <Card style={{ borderColor: "#8601af" }} className=" d-flex justify-content-center">
                            <CardHeader style={{ backgroundColor: "#32174d" }}>
                                <h3 className="d-flex justify-content-center text-light">Education</h3>
                            </CardHeader>
                            <CardBody className="row bg_dp  d-flex justify-content-center">
                                <h4 className="col col-12 d-flex justify-content-center mb-3"><strong className="bg_lp text-light border-rounded"><div className="m-2 text-dark">School</div></strong></h4>
                                <div className=" col-md-4">
                                    <CardImg src="images\din.jpg" className="img_shadow_lp img-fluid mr-5"></CardImg>
                                </div>
                                <h6 className="col-12 mt-5 d-flex justify-content-center text-light">
                                    I had my school incuding 11th and 12th in St. Kabir DIN. I have gaind lots of learnings from there include both academis and corriculor section.<br />
                                    I had been active participant in all the activities be it sports, dance, craft or quiz, I also maintained my top position in the exams.
                                    All this efforts and passion led me towards winning "The Student Of the Year" trophy.
                                </h6>
                                <h4 className="col col-12 d-flex justify-content-center mb-3"><strong className="bg_lp text-light border-rounded"><div className="m-2 text-dark">College</div></strong></h4>
                                <div className=" col-md-4">
                                    <CardImg src="images\seas.jpg" className="img_shadow_lp img-fluid mr-5"></CardImg>
                                </div>
                                <h6 className="col-12 mt-5 d-flex justify-content-center text-light">
                                    I am persuing my graduation at Ahmedabad University (School: School of Engineering And Science (SEAS)).<br />
                                    I undertaken my graduation in BTech Computer Scienc and Engineering.
                                </h6>
                            </CardBody>
                        </Card>
                        <Card style={{ borderColor: "#8601af" }}>
                            <CardHeader style={{ backgroundColor: "#32174d" }}>
                                <h3 className="d-flex justify-content-center text-light">Hobbies</h3>
                            </CardHeader>
                            <CardBody className="row bg_dp" style={{ borderColor: "#8601af" }}>
                                <div className="row m-3 mx-auto">
                                <div className="col mx-auto">
                                    <img class="static img_shadow_lp ml-5" src="images\tennis.jpg" style={{ height: "75%", width: "60%" }} />
                                    <img class="active img_shadow_lp ml-5" src="images\tennis.gif" style={{ height: "70%", width: "60%" }} />
                                </div>
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\painting.jpg" style={{ height: "80%", width: "70%" }} />
                                    <img class="active img_shadow_lp" src="images\painting.gif" style={{ height: "80%", width: "70%" }} />
                                </div>
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\photography.jpg" style={{ height: "80%", width: "73%" }} />
                                    <img class="active img_shadow_lp" src="images\photography.gif" style={{ height: "80%", width: "78%" }} />
                                </div>
                                </div>
                                <div className="row m-3 mx-auto">
                                <div className="col">
                                    <img class="static img_shadow_lp ml-4" src="images\Dance.jpg" style={{ height: "85%", width: "65%" }} />
                                    <img class="active" src="images\Dance.gif" style={{ height: "85%", width: "75%" }} />
                                </div>
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\travel.jpg" style={{ height: "90%", width: "72%" }} />
                                    <img class="active img_shadow_lp" src="images\travel.gif" style={{ height: "90%", width: "75%" }} />
                                </div>
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\coding.jpg" style={{ height: "80%", width: "74%" }} />
                                    <img class="active img_shadow_lp" src="images\coding.gif" style={{ height: "80%", width: "78%" }} />
                                </div>
                                </div>
                                
                            </CardBody>
                        </Card>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMe_L;
