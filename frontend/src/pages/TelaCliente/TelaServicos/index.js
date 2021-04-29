import {Button, Container, Card, Modal, Row, Col, Table, ButtonGroup, ListGroup} from 'react-bootstrap';
import React,{useState} from 'react';
import { FiArrowLeft} from 'react-icons/fi';


export default function TelaServicos(){

    const [show, setShow] = useState(false);




    function validarPlaca(placa){
        var regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';
        
        if (placa.match(regex)) {
            return true;
        }else{
            return false;
        }
    }
   
    return(
        <>
        <Row>
            <Col sm={2} className="bg-dark">
                <Container>
                    <Row className="p-2">
                        <h1 className="text-light">Menu</h1>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Início
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Alterar dados
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Carro
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light" disabled>
                            Serviço
                        </Button>
                    </Row>
                </Container>
            </Col>
            <Col sm={10}>
                <Container className="mt-2" fluid>
                    
                    <Card>
                    <Card.Body>
                        
                        <Card.Title>Serviços</Card.Title>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Placa</th>
                                <th>Marca</th>
                                <th>Modelo</th>                            
                                <th>Valor Total</th>
                                <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>fff-0000</td>
                                <td>Chevrolet</td>
                                <td>Corsa</td>
                                <td>450.00</td>
                                <td><Button onClick={() => setShow(true)}>Editar</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                        
                    </Card.Body>
                    </Card>
                    <Card className="mt-2">
                        
                        <Card.Body >
                            <Card.Title>Outras opções:</Card.Title>
                            <Row className="d-flex justify-content-center">
                                <Button variant="danger mr-2"><FiArrowLeft size={20} color="white"/>Voltar</Button>
                                <ButtonGroup className="mr-2" aria-label="First group">
                                        <Button>Na Fila</Button> 
                                        <Button>Em andamento</Button> 
                                        <Button>Finalizado</Button> 
                                </ButtonGroup>
                            </Row>                    
                        </Card.Body>
                    </Card>
                                
                    

                </Container>
            </Col>
        </Row>
        <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Nota fiscal
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        
                                <h2>Placa</h2>
                                <p>fff-0000</p>
                          
                           
                                <h2>Status</h2>
                                <p>Em andamento</p>
                                                                       
                       
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Card.Title>Itens:</Card.Title>
                        <Table striped bordered hover className="mt-2">
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Pistões novos</td>
                                <td>4</td>
                                <td>100,00</td>
                            </tr>
                            <tr>
                                <td>Trocar óleo</td>
                                <td>1</td>
                                <td>50,00</td>
                            </tr>
                            </tbody>
                        </Table>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Valor Total: 450,00</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button variant="success">
                            Pagar
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Modal.Body>
        </Modal>



       </>
    );
}