import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody, CardImg } from 'reactstrap';
import Desktop_L from './Desktop_L';
import Header from './Header';
class AboutMe extends Component {

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
                    <Header/>
                </div>
                <div className="bg_header mt-3">

                    <p className="ml-3">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas <br />
                    cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden<br />
                    deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el<br />
                     contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir<br />
                    cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>

                    <div style={{ height: "100%", width: "100%" }}>
                        <h3 style={{ backgroundColor: "#32174d" }} className="d-flex justify-content-center text-light">Education</h3>
                        <Card>
                            <CardHeader className="bg_dp"><h5 className="text-light">School</h5></CardHeader>
                            <CardBody className="row bg_lp">
                                <div className="col-md-6 col-12" >
                                    <CardImg src="images\din.jpg" className="img_shadow_lp"></CardImg>
                                </div>
                                <p className="col-md-6 col-12 my-auto">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas
                                cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                                deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                                contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="bg_dp"><h5 className="text-light">College</h5></CardHeader>
                            <CardBody className="row bg_lp">
                                <div className="col-md-6 col-12" >
                                    <CardImg src="images\seas.jpg" className="img_shadow_lp"></CardImg>
                                </div>
                                <p className="col-md-6 col-12 my-auto">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas <br />
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden<br />
                            deshabilitar. Otras cookies nos ayudan a mejorar web. Puede cambiar sus ajustes de cookies en cualquier</p>
                          
                            </CardBody>
                        </Card>
                         <h3 style={{ backgroundColor: "#32174d" }} className="d-flex justify-content-center text-light">Hobbies</h3> 

                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AboutMe;
