import React, { Component } from 'react';
import {Card, CardHeader, Button, CardBody } from 'reactstrap';

class Home_L extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <div className="sticky-top d-flex justify-content-center mt-2">
                        <div className="mx-auto"><h3>Home</h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1" color="white" onClick={this.handlePopout}><i class="fa fa-external-link fa-lg" aria-hidden="true"></i></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Card className="mt-2 border-bottom-0 d-flex justify-content-center">
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
