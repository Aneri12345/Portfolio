import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardHeader, Button, CardBody } from 'reactstrap';
import Desktop_L from './Desktop_L';
class Home_L extends Component {
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

    popout() {
        this.setState({
            popout: true,
        })
    }

    render() {
        if (this.state.popout) {
            return (
                <div>
                    {window.open("/home", '_blank')}
                </div>
            )
        } else if(this.state.back){
            return(
                <Desktop_L/>
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
                        <div>
                            <Button className="rounded-circle btn btn-sm mr-2 mt-1 zoom" color="white" onClick={this.popout}>
                                <img src="images\Popout.png" style={{ height: "25px", width: "25px" }}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: "60vh", width: "59vw", }}>
                    <Card className="mt-2 border-bottom-0 border-top-black d-flex justify-content-center" style={{ backgroundColor:"#32174d"}}>
                        <CardBody>
                            <div className="row d-flex justify-content-center">
                                <img src="images/Aneri.jpg" className="col-lg-5 col-8"></img>
                                <div className="my-auto d-flex justify-content-center">
                                    <h2 className="text-light ml-5">Hello!, I am <span className="text-info"><a href="https://www.linkedin.com/in/aneri-dalwadi/" className="text-decoration-none">Aneri Dalwadi</a></span></h2>
                                </div> 
                                <div className="mt-3 text-light">   
                                    <p>XM utiliza cookies para asegurarse de que le ofrecemos la mejor experiencia mientras visita nuestro sitio web. Algunas
                                    cookies son necesarias para proporcionar características esenciales, tales como sesiones de acceso, y no se pueden
                                    deshabilitar. Otras cookies nos ayudan a mejorar el rendimiento de nuestro sitio web y su experiencia personalizando el
                                    contenido, ofreciendo funcionalidades de redes sociales y analizando nuestro tráfico. Estas cookies también pueden incluir
                                    cookies de terceros, que podrían rastrear su uso de nuestro sitio web. Puede cambiar sus ajustes de cookies en cualquier
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
