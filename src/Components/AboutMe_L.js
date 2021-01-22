import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody } from 'reactstrap';
import Desktop_L from './Desktop_L';

class AboutMe_L extends Component {

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
            <div className="col-md-12">
                <div>
                    <div className="sticky-top d-flex justify-content-center mt-2 mb-2">
                        <Button className="rounded-circle btn btn-sm zoom" color="white" onClick={this.back}>
                            <img src="images\Back.png" style={{ height: "25px", width: "25px" }}></img>
                        </Button>
                        <div className="mx-auto"><h3><strong>About Me   </strong></h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.handlePopout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                <p>XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas <br />
                    cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden<br />
                    deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el<br />
                     contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir<br />
                    cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>

                <div>
                    <p></p>
                </div>
                <div style={{ height: "100vh", width: "56vw" }}>
                    <h3 className="d-flex justify-content-center text-dark  ">Education</h3>
                    <Card>
                        <CardHeader><h5>School</h5></CardHeader>
                        <CardBody className="row">
                            <img className="col-md-6 col-12" src="images\din.jpg"></img>
                            <p className="col-md-6 col-12 my-auto">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader><h5>College</h5></CardHeader>
                        <CardBody className="row">
                            <img className="col-md-6 col-12" src="images\seas.jpg"></img>
                            <p className="col-md-6 col-12 my-auto">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas <br />
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden<br />
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el<br />
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir<br />
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </CardBody>
                    </Card>
                </div>

                <div>
                    <h3 className="d-flex justify-content-center text-dark  ">Skills</h3>
                </div>

                <div >
                    <h3 className="d-flex justify-content-center text-dark  ">Hobbies</h3>
                    <div className="container">
                        <div>
                            <img src="images\Sport.jpg" style={{ height: "16.5%", width: "40%" }} class="static" />
                            <img src="images\sports.gif" style={{ height: "20%", width: "40%" }} class="active" />
                        </div>
                        <div>
                            <img src="images\Sport.jpg" style={{ height: "16.5%", width: "40%" }} class="static" />
                            <img src="images\sports.gif" style={{ height: "20%", width: "40%" }} class="active" />
                        </div>
                        <div>
                            <img src="images\Sport.jpg" style={{ height: "16.5%", width: "40%" }} class="static" />
                            <img src="images\sports.gif" style={{ height: "20%", width: "40%" }} class="active" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default AboutMe_L;
