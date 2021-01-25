import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, CardImg, CardImgOverlay, Form, Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import Desktop_L from './Desktop_L';

class ContactMe_L extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false,
            popout: false,
        }
        this.popout = this.popout.bind(this);
        this.back = this.back.bind(this);
    }

    back() {
        this.setState({
            back: true
        })
    }
    popout(){
        this.setState({
            popout: true,
        })
    }
    render() {
        if(this.state.popout){
            return(
                <div>
                    {window.open("/contactMe", '_blank')}
                </div>
            )
        }
        else if (this.state.back) {
            return (
                <Desktop_L />
            )
        }
        return (
            <div className="container col-md-12">
                <div>
                    <div className="sticky-top d-flex justify-content-center mt-2 mb-2">
                        <Button className="rounded-circle btn btn-sm zoom" color="white" onClick={this.back}>
                            <img src="images\Back.png" style={{ height: "25px", width: "25px" }}></img>
                        </Button>
                        <div className="mx-auto"><h3><strong>Contact Me   </strong></h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.popout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ height: "100vh", width: "58vw" }}>
                    <div className="col col-md-9 d-flex justify-content-center">
                        <Card style={{ borderColor: 'white' }}>
                            <div className="active mt-1">
                                <CardImg src="images\EnvelopeOpen.jpg" style={{ height: "50vh", width: "30vw" }}></CardImg>
                                <CardImgOverlay>
                                    <Form method="post" className="col-md-8 mx-auto mt-4" style={{ backgroundColor: "#d19fe8", borderColor: "", borderWidth: "40px" }}>
                                        <FormGroup>
                                            <Label className="text-dark" htmlFor="firstname">First Name</Label>
                                            <Input type="text" name="firstname" id="firstname"
                                                value={this.state.firstname}
                                                placeholder="First Name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="text-dark" htmlFor="email">Email</Label>
                                            <Input type="email" name="email" id="email"
                                                value={this.state.email}
                                                placeholder="Email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="text-dark" htmlFor="roll">Message</Label>
                                            <Input type="textarea" rows="1" name="roll" id="roll"
                                                value={this.state.roll}
                                                placeholder="Message" />
                                        </FormGroup>
                                        <p className="text-danger d-flex justify-content-center">{this.state.standardSignUpError}</p>
                                        <div className="d-flex justify-content-center">
                                            <Button type="button" value="submit" color="#4b0082" className="mb-3"><span className="fa fa-user fa-lg mr-1"></span> Sign Up</Button>
                                        </div>
                                    </Form>
                                </CardImgOverlay>
                            </div>
                            <CardImg src="images/EnvelopeClose.jpg" className="static " style={{ height: "50vh", width: "30vw" }}  ></CardImg>
                        </Card>
                    </div>
                    <div className="text-dark col ml-5 mt-5">
                       <div>
                       <a href="https://www.instagram.com/aneriddalwadi/"><img src="images\instagram.jpg" className="zoom ml-1 mt-4" style={{height:"50px", width:"50px"}}></img></a>
                       </div>
                       <div>
                       <a href="https://www.linkedin.com/in/aneri-dalwadi/"><img src="images\linkedIn.jpg" className="zoom ml-1 mt-5" style={{height:"50px", width:"50px"}}></img></a>
                       </div>
                       <div>
                       <a href="https://github.com/Aneri12345"><img src="images\gitHub.jpg" className="zoom ml-1 mt-5 rounded-circle" style={{height:"60px", width:"60px"}}></img></a>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMe_L;
