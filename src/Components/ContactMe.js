import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody } from 'reactstrap';
import Desktop_L from './Desktop_L';

class ContactMe extends Component {
    render() {
        return (
            <div>
                <div class="envelope" title="">
                    <div class="back"></div>
                    <form class="letter">
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

export default ContactMe;
