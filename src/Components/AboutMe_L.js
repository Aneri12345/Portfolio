import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody } from 'reactstrap';

class AboutMe_L extends Component {

    render() {
        return (
            <div className="container col-md-12">
                <div>
                    <h1 className="text-dark d-flex justify-content-center">About Me</h1>
                    <p>XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas <br />
                    cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden<br />
                    deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el<br />
                     contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir<br />
                    cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <h3 className="d-flex justify-content-center text-dark  ">Education</h3>
                    <Card>
                        <CardHeader><h5>School</h5></CardHeader>
                        <CardBody className="row">
                            <img className="col-md-6 col-12" src="images\din.jpg"></img>
                            <p className="col-md-6 col-12 my-auto">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas <br />
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden<br />
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el<br />
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir<br />
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
                    <div className="container d-flex justify-content-center text">
                        <div>
                            <img src="images\Sport.jpg" style={{ height: "25%", width: "40%" }} class="static" />
                            <img src="images\sports.gif" style={{ height: "20%", width: "40%" }} class="active" />
                        </div>
                        <div>
                            <img src="images\Sport.jpg" style={{ height: "25%", width: "40%" }} class="static" />
                            <img src="images\sports.gif" style={{ height: "20%", width: "40%" }} class="active" />
                        </div>
                        <div>
                            <img src="images\Sport.jpg" style={{ height: "25%", width: "40%" }} class="static" />
                            <img src="images\sports.gif" style={{ height: "20%", width: "40%" }} class="active" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe_L;
