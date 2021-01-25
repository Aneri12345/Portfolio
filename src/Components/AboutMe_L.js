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

        this.back = this.back.bind(this);
        this.popout = this.popout.bind(this);
        this.handlePoliciesClick = this.handlePoliciesClick.bind(this);
    }

    handlePoliciesClick = () => {
        window.open(AboutMe, '_blank');
    }

    back() {
        this.setState({
            back: true
        })
    }

    popout() {
        this.setState({
            popout: true,
        })
    }

    render() {
        if (this.state.popout) {
            return (
                <div>
                    {window.open("/aboutMe", '_blank')}
                </div>
            )
        }
        else if (this.state.back) {
            return (
                <Desktop_L />
            )
        }
        return (
            <div style={{ height: "100%", width: "57vw" }}>
                <div>
                    <div className="sticky-top d-flex justify-content-center mt-2 mb-2">
                        <Button className="rounded-circle btn btn-sm zoom" color="white" onClick={this.back}>
                            <img src="images\Back.png" className="mb-3" style={{ height: "25px", width: "25px" }}></img>
                        </Button>
                        <div className="mx-auto"><h3><strong>About Me</strong></h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.popout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg_header">
                    <div style={{ height: "150vh", width: "58vw" }} className="bg_dp">
                        <Card style={{ borderColor: "#8601af" }}>
                            <CardHeader style={{ backgroundColor: "#32174d" }}>
                                <h3 className="d-flex justify-content-center text-light">Education</h3>
                            </CardHeader>
                            <CardBody className="row bg_dp">
                                <h4 className="col col-md-12 col-12 d-flex justify-content-center mb-3"><strong className="bg_lp text-light border-rounded"><div className="m-2 text-dark">School</div></strong></h4>
                                <div className="col-md-5 col-12" >
                                    <CardImg src="images\din.jpg" className="img_shadow_lp mb-3" style={{ height: "90%", width: "90%" }}></CardImg>
                                </div>
                                <h6 className="col-md-7 col-12 my-auto text-light">
                                    I had my school incuding 11th and 12th in St. Kabir DIN. I have gaind lots of learnings from there include both academis and corriculor section.<br />
                                    I had been active participant in all the activities be it sports, dance, craft or quiz, I also maintained my top position in the exams.
                                    All this efforts and passion led me towards winning "The Student Of the Year" trophy.
                                </h6>
                            </CardBody>
                        </Card>
                        <Card style={{ borderColor: "#8601af" }}>
                            <CardBody className="row bg_dp">
                                <h4 className="col col-md-12 col-12 d-flex justify-content-center mb-3"><strong className="bg_lp text-light border-rounded">
                                    <div className="m-2 text-dark">
                                        College
                                    </div>
                                </strong>
                                </h4>
                                <div className="col-md-5 col-12" >
                                    <CardImg src="images\seas.jpg" className="img_shadow_lp mb-3" style={{ height: "100%", width: "90%" }}></CardImg>
                                </div>
                                <h6 className="col-md-7 col-12 my-auto text-light">
                                    I am pertaining my graduation at Ahmedabad University (School: School of Engineering And Science (SEAS)).<br />
                                    I undertaken my graduation in BTech Computer Scienc and Engineering.
                                </h6>
                            </CardBody>
                        </Card>
                        <Card style={{ borderColor: "#8601af" }}>
                            <CardHeader style={{ backgroundColor: "#32174d" }}>
                                <h3 className="d-flex justify-content-center text-light">Hobbies</h3>
                            </CardHeader>
                            <CardBody className="row bg_dp" style={{ borderColor: "#8601af" }}>
                                <div className="row m-3">
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\tennis.jpg" style={{ height: "100%", width: "80%" }} />
                                    <img class="active img_shadow_lp" src="images\tennis.gif" style={{ height: "100%", width: "80%" }} />
                                </div>
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\painting.jpg" style={{ height: "100%", width: "90%" }} />
                                    <img class="active img_shadow_lp" src="images\painting.gif" style={{ height: "100%", width: "90%" }} />
                                </div>
                                </div>
                                <div className="row m-3">
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\Dance.jpg" style={{ height: "100%", width: "80%" }} />
                                    <img class="active" src="images\Dance.gif" style={{ height: "100%", width: "90%" }} />
                                </div>
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\travel.jpg" style={{ height: "100%", width: "88%" }} />
                                    <img class="active img_shadow_lp" src="images\travel.gif" style={{ height: "100%", width: "95%" }} />
                                </div>
                                </div>
                                <div className="row m-3">
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\photography.jpg" style={{ height: "90%", width: "83%" }} />
                                    <img class="active img_shadow_lp" src="images\photography.gif" style={{ height: "90%", width: "90%" }} />
                                </div>
                                <div className="col">
                                    <img class="static img_shadow_lp" src="images\coding.jpg" style={{ height: "90%", width: "84%" }} />
                                    <img class="active img_shadow_lp" src="images\coding.gif" style={{ height: "90%", width: "90%" }} />
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
