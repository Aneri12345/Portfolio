import React, { Component } from 'react';
import Desktop_L from './Desktop_L';
import { Button, Card, CardHeader } from 'reactstrap';
class Projects extends Component {

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
                        <div className="mx-auto"><h3><strong>Projects</strong></h3></div>
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.handlePopout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* PROJECT 1 */}
                <Card className="bg_dp" style={{ borderRadius: "0px" }}>
                    <CardHeader className="text-light d-flex justify-content-center" style={{ backgroundColor: "#32174d" }}><h3>1. Resource Management System</h3></CardHeader>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "40vh", width: "30vw" }} className="m-3 img_shadow_lp"></img>
                        </div>
                        <div className="col col-md-6 col-12 my-auto">
                            <h3 className="text-light"><strong>Theme</strong></h3>
                            <p className="text-light" style={{fontFamily:"serif", fontSize:"18px"}}>XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg_dp" >
                    <div className="row">
                        <div className="col col-md-6 col-12 my-auto" style={{ borderColor: "#800080" }}>
                            <h3 className="text-light ml-3"><strong>Making</strong></h3>
                            <p className="text-light m-3">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "40vh", width: "30vw" }} className="m-3 img_shadow_lp"></img>
                        </div>
                    </div>
                </Card>
                {/* PROJECT 2 */}
                <Card className="bg_lp" style={{ borderRadius: "0px" }}>
                    <CardHeader className="text-light d-flex justify-content-center" style={{ backgroundColor: "#32174d" }}><h3>2. Resource Management System</h3></CardHeader>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "40vh", width: "30vw" }} className="m-3 img_shadow_lp"></img>
                        </div>
                        <div className="col col-md-6 col-12 my-auto">
                            <h3 className="text-dark"><strong>Theme</strong></h3>
                            <p className="text-dark">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg_lp" >
                    <div className="row">
                        <div className="col col-md-6 col-12 my-auto" style={{ borderColor: "#800080" }}>
                            <h3 className="text-dark ml-3"><strong>Making</strong></h3>
                            <p className="text-dark m-3">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "40vh", width: "30vw" }} className="m-3 img_shadow_lp"></img>
                        </div>
                    </div>
                </Card>
                {/* PROJECT 1 */}
                <Card className="bg_dp" style={{ borderRadius: "0px" }}>
                <CardHeader className="text-light d-flex justify-content-center" style={{ backgroundColor: "#32174d" }}><h3>3. Resource Management System</h3></CardHeader>
                        <div className="row">
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "40vh", width: "30vw" }} className="m-3 img_shadow_lp"></img>
                        </div>
                        <div className="col col-md-6 col-12 my-auto">
                            <h3 className="text-light"><strong>Theme</strong></h3>
                            <p className="text-light">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg_dp" >
                    <div className="row">
                        <div className="col col-md-6 col-12 my-auto" style={{ borderColor: "#800080" }}>
                            <h3 className="text-light ml-3"><strong>Making</strong></h3>
                            <p className="text-light m-3">XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas 
                            cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                            deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                            contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                            cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier</p>
                        </div>
                        <div className="col col-md-6 col-12">
                            <img src="images\Background_L.jpg" style={{ height: "40vh", width: "30vw" }} className="m-3 img_shadow_lp"></img>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Projects;

