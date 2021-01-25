import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, CardImg, CardImgOverlay, Form, Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import Desktop_L from './Desktop_L';
import Header from './Header';

class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false,
        }

        this.back = this.back.bind(this);
    }

    back() {
        this.setState({
            back: true
        })
    }

    render() {
        if (this.state.back) {
            return (
                <Desktop_L />
            )
        }
        return (
            <div style={{overflowX: "hidden"}}>
                <Header/>
                <div className="row">
                    <div className="col col-md-10 d-flex justify-content-center">
                        <Card style={{ borderColor: 'white' }}>
                            <div className="active mt-1">
                                <CardImg src="images\EnvelopeOpen.jpg" style={{ height: "75", width: "40vw" }}></CardImg>
                                <CardImgOverlay>
                                    <Form method="post" className="col-md-8 mx-auto" style={{ backgroundColor: "#d19fe8", borderColor: "", borderWidth: "40px" , marginTop:"20%"}}>
                                        <FormGroup className='mt-4'>
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
                                            <Label className="text-dark" htmlFor="roll">AU Roll Number</Label>
                                            <Input type="text-area" name="roll" id="roll"
                                                value={this.state.roll}
                                                placeholder="AU Roll Number" />
                                        </FormGroup>
                                        <p className="text-danger d-flex justify-content-center">{this.state.standardSignUpError}</p>
                                        <div className="d-flex justify-content-center">
                                            <Button type="button" value="submit" color="#4b0082" className="mb-3 btn"><span className="fa fa-user fa-lg mr-1"></span> Sign Up</Button>
                                        </div>
                                    </Form>
                                </CardImgOverlay>
                            </div>
                            <CardImg src="images/EnvelopeClose.jpg" className="static " style={{ height: "75vh", width: "40vw" }}  ></CardImg>
                        </Card>
                    </div>
                    <div className="text-dark col ml-5 my-auto">
                       <div className="mt-5">
                           <a href="https://www.instagram.com/aneriddalwadi/"><img src="images\instagram.jpg" className="zoom mt-4" style={{height:"60px", width:"60px"}}></img></a>
                       </div>
                       <div>
                           <a href="https://www.linkedin.com/in/aneri-dalwadi/"><img src="images\linkedIn.jpg" className="zoom mt-5" style={{height:"60px", width:"60px"}}></img></a>
                       </div>
                       <div>
                           <a href="https://github.com/Aneri12345"><img src="images\gitHub.jpg" className="zoom mt-5 rounded-circle" style={{height:"60px", width:"60px"}}></img></a>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMe;
