import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardHeader, Button, CardBody } from 'reactstrap';
import Desktop_L from './Desktop_L';
import Header from './Header';
class Home extends Component {
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
        return (
            <div>
                <Header/>
                <div style={{ height: "100%", width: "100%" }}>
                    <Card className="mt-2 border-bottom-0 border-top-black d-flex justify-content-center">
                        <CardBody>
                            <div className="row d-flex justify-content-center">
                                <img src="images/Aneri.jpg" className="col-lg-5 col-8"></img>
                                <div className="my-auto mx-auto">
                                    <h2>Hello!, I am <span className="text-info"><a href="" className="text-decoration-none">Aneri Dalwadi</a></span></h2>
                                    <h5>I am a full stack website developer,</h5>
                                    <h5>I am a full stack website developer,</h5>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }

}


export default Home;
