import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody, CardImg } from 'reactstrap';
import Desktop_L from './Desktop_L';

class ContactMe_L extends Component {
    render() {
        return (
            <div className=" col-md-12">
                <div>
                    <Card className="static">
                        <CardImg src="images\Dance.jpg"></CardImg>
                    </Card>
                    <form className="active">
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
                </div>
            </div>
        );
    }
}

export default ContactMe_L;
