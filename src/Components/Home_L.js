import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardHeader, Button, CardBody } from 'reactstrap';
import Desktop_L from './Desktop_L';
class Home_L extends Component {
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
            <div>
                <div>
                    <div className="sticky-top d-flex justify-content-center mt-2">
                        <Button className="rounded-circle btn btn-sm zoom" color="white" onClick={this.back}>
                            <img src="images\Back.png" style={{ height: "25px", width: "25px" }}></img>
                        </Button>
                        <div className="mx-auto"><h3><strong>Home</strong></h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.handlePopout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: "100vh", width: "59vw" }}>
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


export default Home_L;
