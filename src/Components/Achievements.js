import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button } from 'reactstrap';
import Desktop_L from './Desktop_L';
import Header from './Header';

const items = [
    {
        src: 'https://res.cloudinary.com/didf23s1x/image/upload/v1611548897/Misc/Google_Cloud_Certificate_vjmrns.png',
        alt: 'Interview of Prof. Chandra',
        captionT: 'hahahaha',
        captionH: 'haeyyy'
    },
    {
        src: 'https://res.cloudinary.com/didf23s1x/image/upload/v1611549316/Misc/Hacktoberfest_Certificate_s3hhjk.png',
        alt: 'Slide 2',
        captionT: 'Slide 2',
        captionH: 'slide 2'
    },
]

class Achievements extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            activeIndex: 0,
            animating: false,
            back: false
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        // this.slides = this.slides.bind(this);
    }

    next() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex,
        });
    }

    previous() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex,
        });
    }

    goToIndex(newIndex) {
        if (this.state.animating) return;
        this.setState({
            activeIndex: newIndex,
        });
    }

    render() {
        if (this.state.back) {
            return (
                <Desktop_L />
            )
        }
        let slides = items.map((item) => {
            return (
                <CarouselItem onExiting={() => this.setState({ animating: true })}
                    onExited={() => this.setState({ animating: false })}
                    key={item.src}>
                    <div className="container d-flex justify-content-center" id="card1">
                        <img style={{ width: "65%", maxHeight: "55%" }} className="img-fluid" id="img1" src={item.src} alt={item.alt_text} />
                    </div>
                    <div className="container d-flex justify-content-center" id="cardText">
                        <CarouselCaption captionText={item.captionT} id="cardText" className="text-dark" captionHeader={item.captionH} />
                    </div>
                </CarouselItem>
            );
        });
        return (
            <div style={{ overflowX: "hidden" }}>
                <Header />
                <div style={{ height: "100%", width: "100vw" }} className="bg_header" >
                    <div className="my-auto">
                        <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} >
                            <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                        <div className="mt-4 mx-auto col-md-10 ">
                            <h4 className="d-flex justify-content-center">Google Cloud Program</h4>
                            <p className="d-flex justify-content-center ml-4">
                                Google Cloud Platform was a training program where we understood the core cloud as well as Machine Learning concepts.
                                Practical implementation helped a lot to make the concepts clear. This way at least at basic level, I had a
                                knowledge about the topic especially cloud. I would like to thank the Google Student Developer Club of
                                Ahmedabad University for this providing this amazing opportunity.
                            </p>
                            <h4 className="d-flex justify-content-center">Hacktoberfest 2020</h4>
                            <p className="d-flex justify-content-center ml-4">
                                Hacktoberfest is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio.
                                In this fest, we have to contribute to an open source project which must have a label of hacktoberfest-2020. So, when we
                                create a Pull Request, we have to then wait for the moderator to add our changes to the main project. This was great experience
                                and I thansk Ahmedabad University Programming Club for giving this opportunity that helped in boost the learning process and
                                also introduce to the world of Open Source Projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Achievements;
