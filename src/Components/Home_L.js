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
                    </div>
                </div>
                <div style={{ height: "60vh", width: "59vw", }}>
                    <Card className="mt-2 border-bottom-0 border-top-black d-flex justify-content-center" style={{ backgroundColor: "#32174d" }}>
                        <CardBody>
                            <div className="row d-flex justify-content-center">
                                <img src="images/Aneri.jpg" className="col-lg-5 col-8"></img>
                                <div className="my-auto d-flex justify-content-center">
                                    <h2 className="text-light ml-5">Hello!, I am <span className="text-info"><a href="https://www.linkedin.com/in/aneri-dalwadi/" className="text-decoration-none">Aneri Dalwadi</a></span></h2>
                                </div>
                                <div className="mt-3 text-light">
                                    <p>
                                        Let me begin by saying something about me. I am pursuing my graduation under BTech CSE stream. I am very passionate about coding and web development because I love doing it. I am quiet ambitious about my work and hence i do not leave it halfway, and try to show my best through my skills.
                                        I am enthusiastic about learning new concepts and skills and hence enjoy constant learning procedure.I currently am a full stack web
                                        developer. I am also currently exploring Cloud Computing and Machine learning
                                        though I don't have much experience about the topic. But amongst all of my skills, the
                                        most notable one is my passion for learning. Now, I won't speak much
                                        and will allow you to explore me &#128521;.
                                    </p>
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
