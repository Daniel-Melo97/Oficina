import {Button, Container, Form, Card, Modal, Row, Col, Table} from 'react-bootstrap';
import React,{useState} from 'react';
import {FiPlus, FiArrowLeft, FiSave, FiTrash2, FiX} from 'react-icons/fi';


export default function TelaCarros(){

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);


    function handleEdit(){
        //trazer dados do carro que será editado
        setEdit(true);
        setShow(true);

    }

    function handleNew(){
        //limpar campos
        setEdit(false);
        setShow(true);
    }


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
                        <Button block variant="outline-light" disabled>
                            Carro
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Serviço
                        </Button>
                    </Row>
                </Container>
            </Col>
            <Col sm={10}>
                <Container className="mt-2" fluid>
                    
                    <Card>
                    <Card.Body>
                        
                        <Card.Title>Seus Veículos</Card.Title>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Placa</th>
                                <th>Marca</th>
                                <th>Modelo</th>                            
                                <th>Ano</th>
                                <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>fff-0000</td>
                                <td>Chevrolet</td>
                                <td>Corsa</td>
                                <td>2006</td>
                                <td><Button onClick={handleEdit}>Editar</Button></td>
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
                                <Button variant="success mr-2" onClick={handleNew}><FiPlus size={20} color="white"/>Novo Carro</Button>
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
                {edit ? 'Editar Carro' : 'Adicionar Carro'}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="was-validated">
                    <Form.Group controlId="Placa">
                        <Form.Label>Placa</Form.Label>
                        <Form.Control type="text" placeholder="Digite a placa do seu veículo" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite um placa válida.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Marca">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="Digite a marca do seu veículo" required/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite a marca do seu veículo(ex: Chevrolet, Ford, etc...).
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Modelo">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text" placeholder="Digite o Modelo do seu veículo" required/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite o modelo do seu veículo(Celta, Uno, etc...).
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Ano">
                        <Form.Label>Ano</Form.Label>
                        <Form.Control type="number" placeholder="Ano" required/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o ano de fabricação do seu veículo.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="success mr-2" type="submit" hidden={edit}>
                            <FiPlus size={20} color="white"/>Adicionar
                        </Button>
                        <Button variant="primary mr-2" type="submit" hidden={!edit}>
                            <FiSave size={20} color="white"/>Salvar Alterações
                        </Button>
                        <Button variant="danger mr-2" type="submit" hidden={!edit}>
                            <FiTrash2 size={20} color="white"/>Excluir
                        </Button>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            <FiX size={20} color="white"/>Fechar
                        </Button>
                       
                    </Modal.Footer>
                   
                </Form>

            </Modal.Body>
        </Modal>



       </>
    );
}