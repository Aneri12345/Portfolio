import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardHeader, Button, CardBody } from 'reactstrap';
import Desktop_L from './Desktop_L';
import Header from './Header';
class Home extends Component {
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
        return (
            <div style={{ backgroundColor:"#32174d", overflowY:"hidden"}} >
                <Header/>
                <div  className="container"  style={{ height: "100%", width: "100%"}}>
                <Card className="border-bottom-0 border-top-black d-flex justify-content-center"  style={{height: "100vh", width: "100%",backgroundColor:"#32174d"}}>
                        <CardBody>
                            <div className="row d-flex justify-content-center">
                                <img src="images/Aneri.jpg" className="col-md-6 col-8"></img>
                                <div className="my-auto d-flex justify-content-center">
                                    <h2 className="text-light ml-5">Hello!, I am <span className="text-info"><a href="https://www.linkedin.com/in/aneri-dalwadi/" className="text-decoration-none">Aneri Dalwadi</a></span></h2>
                                </div> 
                                <div className="mt-3 text-light col-md-10" >   
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


export default Home;
