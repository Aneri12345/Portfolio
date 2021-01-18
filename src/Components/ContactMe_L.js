import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody, CardImg, CardImgOverlay } from 'reactstrap';
import Desktop_L from './Desktop_L';

class ContactMe_L extends Component {
    render() {
        return (

            <div className="container col-md-12" style={{height:"100vh", width:"20vw"}}>
                <div>
                    <Card style={{borderColor:'white'}}>
                        <img src="images\EnvelopeClose.jpg" className="static "></img>
                        <CardImg src="images\EnvelopeOpen.jpg" className="active mt-1"></CardImg>
                    </Card>
                    <Card className="active">
                        
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
                    </Card>
                </div>
            </div>
        );
    }
}

export default ContactMe_L;
