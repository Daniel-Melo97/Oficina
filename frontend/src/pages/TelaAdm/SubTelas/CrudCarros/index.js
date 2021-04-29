import {Button, Container, Form, Card, Modal, Row, Col, Table} from 'react-bootstrap';
import React,{useState} from 'react';
import {FiPlus, FiArrowLeft, FiSearch, FiAlignJustify, FiSave, FiTrash2, FiX} from 'react-icons/fi';


export default function CrudCarros(){

    const [show, setShow] = useState(false);
    const [showList, setShowList] = useState(false);


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
                        <h1 className="text-light">Editar</h1>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Início
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Pessoa
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light"  disabled>
                            Carro
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Serviço
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Item
                        </Button>
                    </Row>
                </Container>
            </Col>
            <Col sm={10}>
                <Container className="mt-2" fluid>
                    
                    <Card>
                    <Card.Body>
                        
                        <Card.Title>Novo Veículo</Card.Title>
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

                            <Form.Group controlId="Nome_Proprietário">
                                <Form.Label>Nome do proprietário</Form.Label>
                                <Form.Control type="text" required placeholder="Nome do proprietário do veículo"/>
                                <Form.Control.Feedback type="invalid">
                                    Por favor, digite o nome do proprietário do veículo.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Criar <FiPlus size={20} color="white"/>
                            </Button>
                        </Form>
                        
                    </Card.Body>
                    </Card>
                    <Card className="mt-2">
                        
                        <Card.Body >
                            <Card.Title>Outras opções:</Card.Title>
                            <Row className="d-flex justify-content-center">
                                <Button variant="danger mr-2"><FiArrowLeft size={20} color="white"/>Voltar</Button>
                                <Button variant="success mr-2" onClick={() => setShow(true)}><FiSearch size={20} color="white"/>Buscar</Button>
                                <Button variant="primary" onClick={() => setShowList(true)}><FiAlignJustify size={20} color="white"/>Listar</Button>
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
                Buscar Carros
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form inline>
                    <Form.Control type="text" placeholder="Procurar por Placa" className="mr-sm-2"/>
                    <Button variant="success"><FiSearch size={20} color="white"/>Buscar</Button>
                </Form>
                <Form className="was-validated mt-2">
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

                    <Form.Group controlId="Nome_Proprietário">
                        <Form.Label>Nome do proprietário</Form.Label>
                        <Form.Control type="text" required placeholder="Nome do proprietário do veículo"/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite o nome do proprietário do veículo.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="primary mr-2" type="submit">
                            <FiSave size={20} color="white"/>Salvar Alterações
                        </Button>
                        <Button variant="danger mr-2">
                            <FiTrash2 size={20} color="white"/>Deletar
                        </Button>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            <FiX size={20} color="white"/>Fechar
                        </Button>
                    </Modal.Footer>
                   
                </Form>

            </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            show={showList}
            onHide={() => setShowList(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Listagem de Carros
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="success">
                    <FiAlignJustify size={20} color="white"/>Listar
                </Button>
                <Table striped bordered hover className="mt-2">
                    <thead>
                        <tr>
                            <th>Placa</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Ano</th>
                            <th>CPF Proprietário</th>
                        </tr>
                        </thead>
                        <tbody>
                    </tbody>
                </Table>

            </Modal.Body>



        </Modal>



       </>
    );
}