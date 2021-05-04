import {React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactImage from '../../img/contact-image.png'
import { SendEmail } from "../../axios/index";



const Contact = () => {

    const [validated, setValidate] = useState(false)
    const [DataConsole, setDataConsole] = useState({})


    const functionOnChange = (event) => {
            console.log('FUNCIONA')
            console.log(event.target.name)
            let datos = {}  //crea un objeto vacío 
            datos[event.target.name] = event.target.value      //se le da el valor del event al objeto datos.name
            setDataConsole( (prevState) =>{                    //crea una funcion para retornar lo de abajo. funcion para guardar datos en DataConsole
            return {
                ...prevState,  //hace una copia del estado anterior...
                [event.target.name] : event.target.value  //crea un objeto para guardar el event en DataConsole y mostrarlo por consola 
            }
        } )
    }

        console.log(DataConsole)

    const functionOnSubmit = async (event) => {
        event.preventDefault();  
        const form = event.currentTarget; //currentTarget sirve para poder usar la validación del form checkValidity()
        console.log(form.checkValidity())  //checkValidity hace la validación, devuelve true o false dependiendo si se validó o no 


        if(form.checkValidity()) {  //si la validación fue correcta =
            console.log(DataConsole)

            let responseData = await SendEmail(DataConsole) //se crea una variable para enviar los datos de la api, SendEmail esta declarada en 'axios/index.js'

            console.log(responseData)

            form.reset() //limpia los input al enviar los datos 
        }
    }

return (
    <section className="Contact" id="Contact-button">
        <Container>
            <Row>
                <Col md={12} lg={5}>
                    <h3 className="TitleContact">
                       Get in touch <br/>
                       <span className="TitleContact-span"> We are hiring! </span> 
                    </h3>
                </Col>
                <Form className="ContactForm" noValidate validated={validated} onSubmit={functionOnSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" name="name" onChange={functionOnChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Email" name="email" onChange={functionOnChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="phone" placeholder="Phone" name="phone" onChange={functionOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Message" name="message" className="textarea" onChange={functionOnChange}/>
                    </Form.Group>
                
                    <Button variant="primary" type="submit" className="ButtonSend" >
                        Send
                    </Button>
                </Form>
                <Col md={12} lg={5}>
                <img src={ContactImage} alt="Pic of a ballon" className="d-block w-100 imagen " />
                </Col>
            </Row>
        </Container>
    </section>    
)
}

export default Contact;