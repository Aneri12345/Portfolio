import React, { Component } from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { Chrono } from 'react-chrono';
import {Redirect} from 'react-router-dom';
import Desktop_L from './Desktop_L';

const items = [{
    title: <h5>May 2020</h5>,
    cardTitle: <h2 className="textPurp" >Company 1</h2>,
    cardSubtitle: <img src="images\Background_L.jpg" className="ml-3" style={{ width: "90%", height: "40%" }}></img>,
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit",
    }, {
    title: "May 1940",
    cardTitle: <h2 className="textPurp" >Company 2</h2>,
    cardSubtitle: <img src="images\Background_L.jpg" className="ml-3" style={{ width: "90%", height: "40%" }}></img>,
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit",
    }, {
    title: "May 1940",
    cardTitle: <h2 className="textPurp" >Company 3</h2>,
    cardSubtitle: <img src="images\Background_L.jpg" className="ml-3" style={{ width: "90%", height: "40%" }}></img>,
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit",
    },];

class Experience_L extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false,
            popout: false,
        }

        this.back = this.back.bind(this);
        this.popout = this.popout.bind(this);
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
                    {window.open("/experience", '_blank')}
                </div>
            )
        }
        else if (this.state.back) {
            return (
                <Desktop_L />
            )
        }
        return(
            <div>
                <div>
                    <div className="sticky-top d-flex justify-content-center mt-2 mb-2">
                        <Button className="rounded-circle btn btn-sm zoom" color="white" onClick={this.back}>
                            <img src="images\Back.png" style={{ height: "25px", width: "25px" }}></img>
                        </Button>
                        <div className="mx-auto"><h3><strong>Experience </strong></h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.popout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="bg_header" style={{ height: "150vh", width: "57vw" }}>
                        <div className="d-flex justify-content-center">Click(<span className="fa fa-arrow-up mt-1 ml-1"></span><span className="fa fa-arrow-down mt-1 ml-2 mr-1"></span>)</div>
                        <div>
                            <Chrono items={items} 
                            theme={{ primary: "#4b0082", secondary: "white", cardBgColor: "#d19fe8", cardForeColor: "black" }} 
                            hideControls
                            mode="VERTICAL_ALTERNATING"
                            scrollable scrollable={{ scrollbar: true }}></Chrono>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience_L;
