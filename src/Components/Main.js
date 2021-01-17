import React, { Component } from 'react';
import { Card, CardOverlay, CardBody, CardFooter, CardHeader, CardImgOverlay } from 'reactstrap'
import Home_L from './Home_L';
import Desktop_L from './Desktop_L';
import AboutMe_L from './AboutMe_L';
import ContactMe_L from './ContactMe_L';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            show : props.show
        }
    }

    componentDidMount(){
        this.setState({
            show: <Desktop_L />
        })
    }

    render() {
        return (
            <div className="background">
            <div className="d-flex justify-content-center">
                <div className="col-md-12 col-12 mt-3">
                    <div className="d-flex justify-content-center col-xs-6 col-sm-10 col-md-8 col-lg-9 mx-auto">
                        <Card className="laptop">
                            <CardHeader className="header d-flex justify-content-center">
                                <img src="images\Camera.jpg" className="rounded-circle mb-2" style={{ height: "28px", width: "28px"}}></img>
                            </CardHeader>
                            <div style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                                <ContactMe_L/>
                                {/* {this.state.show} */}
                            </div>
                        </Card>
                    </div>
                    <div className=" col-xs-12 col-md-10 col-sm-12 col-lg-10 col-xl-10 mx-auto">
                        <Card className="border-white">
                            <img src="images\Keyboard1.jpg" ></img>
                        </Card>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Main;
