import React, { Component } from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { Chrono } from 'react-chrono';
import Header from './Header';

const items = [{
    title: <h5>May 2020</h5>,
    cardTitle: <h4 className="textPurp" >Company 1</h4>,
    cardSubtitle: <img src="images\Background_L.jpg" className="ml-3" style={{ width: "90%", height: "40%" }}></img>,
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit",
}, {
    title: "May 1940",
    cardTitle: <h4 className="textPurp" >Company 2</h4>,
    cardSubtitle: <img src="images\Background_L.jpg" className="ml-3" style={{ width: "90%", height: "40%" }}></img>,
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit",
}, {
    title: "May 1940",
    cardTitle: <h4 className="textPurp" >Company 3</h4>,
    cardSubtitle: <img src="images\Background_L.jpg" className="ml-3" style={{ width: "90%", height: "40%" }}></img>,
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.Men of the British Expeditionary Force (BEF) wade out todajhbdjwhd.(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit(BEF) wade out todajhbdjwhd.Men of the British Expedit",
},];

class Experience extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="bg_header">
                    <div className="" style={{ height: "100%", width: "100%" }}>
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

export default Experience;
