import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody, CardImg, CardImgOverlay } from 'reactstrap';
import Desktop_L from './Desktop_L';

class ContactMe_L extends Component {
    render() {
        return (
            <div className="mx-auto" style={{ height: "100vh", width: "100vw" }}>
                <div className="row " style={{ height: "100vh", width: "50vw" }}>
                    <div className="col-md-8 ">
                        <Card style={{ borderColor: 'white' }}>
                            <div className="active mt-1">
                                <CardImg src="images\EnvelopeOpen.jpg"></CardImg>
                                <CardImgOverlay >
                                    <form>
                                        <p>
                                            <label>Name:</label>
                                            <input type="text" name="name" />
                                        </p>
                                        <p>
                                            <label>Email:</label>
                                            <input type="email" name="email" />
                                        </p>
                                        <p>
                                            <label>Message:</label>
                                            <textarea></textarea>
                                        </p>
                                        <input type="submit" value="Send" />
                                    </form>
                                </CardImgOverlay>
                            </div>
                            <CardImg src="images\EnvelopeClose.jpg" className="static "></CardImg>
                        </Card>
                    </div>
                    <div className="col row">
                        <div > 
                        <Card style={{ borderColor: 'white' }}>
                            <div className="active mt-1">
                                <CardImg src="images\GiftOpen.jfif"></CardImg>
                                <CardImgOverlay className="zoom d-flex justify-content-center mt-5 ml-5 ">
                                    <img src="images\instagram.jpg" style={{ height: "9vh", width: "4vw" }} className="mt-5 "></img>
                                </CardImgOverlay>
                            </div>
                            <CardImg src="images\Gift1.jpg" className="static "></CardImg>
                        </Card>
                        <Card style={{ borderColor: 'white' }}>
                            <div className="active mt-1">
                                <CardImg src="images\GiftOpen.jfif"></CardImg>
                                <CardImgOverlay className="d-flex justify-content-center mt-5 ml-5 ">
                                    <img src="images\instagram.jpg" style={{ height: "10vh", width: "5vw" }} className="mt-5 "></img>
                                </CardImgOverlay>
                            </div>
                            <CardImg src="images\Gift2.jpg" className="static "></CardImg>
                        </Card>
                        </div>
                        <Card style={{ borderColor: 'white' }}>
                            <div className="active mt-1">
                                <CardImg src="images\GiftOpen.jfif"></CardImg>
                                <CardImgOverlay className="d-flex justify-content-center mt-5 ml-5 ">
                                    <img src="images\instagram.jpg" style={{ height: "10vh", width: "5vw" }} className="mt-5 "></img>
                                </CardImgOverlay>
                            </div>
                            <CardImg src="images\Gift3.jpg" className="static "></CardImg>
                        </Card>
                        <Card style={{ borderColor: 'white' }}>
                            <div className="active mt-1">
                                <CardImg src="images\GiftOpen.jfif"></CardImg>
                                <CardImgOverlay className="d-flex justify-content-center mt-5 ml-5 ">
                                    <img src="images\instagram.jpg" style={{ height: "10vh", width: "5.3vw" }} className="mt-5 "></img>
                                </CardImgOverlay>
                            </div>
                            <CardImg src="images\Gift4.jpg" className="static "></CardImg>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMe_L;
