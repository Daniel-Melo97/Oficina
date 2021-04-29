import {Button, Container, Form, Card, Modal, Row, Col, ListGroup, Table, Accordion} from 'react-bootstrap';
import React,{useState} from 'react';
import {FiPlus, FiArrowLeft, FiSearch, FiAlignJustify, FiSave, FiTrash2, FiX} from 'react-icons/fi';

export default function CrudServicos(){

    const [show, setShow] = useState(false);
    const [showList, setShowList] = useState(false);

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
                        <Button block variant="outline-light">
                            Carro
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light" disabled>
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
                            <Card.Title>Novo Serviço</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Form className="was-validated">
                                        <Form.Group controlId="Placa">
                                            <Form.Label>Placa</Form.Label>
                                            <Form.Control type="text" placeholder="Digite a placa do veículo que fará manuntenção" required />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor, digite um placa válida.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Criar <FiPlus size={20} color="white"/>
                                        </Button>
                                    </Form>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <Card.Title>(Opcional)Adicionar itens:</Card.Title>
                                    <Form>
                                        <Form.Group controlId="Id_Item">
                                            <Form.Label>Item</Form.Label>
                                            <Form.Control as="select" required>
                                                <option value="">Selecione algum item:</option>
                                                <option value={0}>Ajeitar suspensão</option>
                                                <option value={1}>Trocar óleo</option>
                                                <option value={2}>Etc...</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="Quantidade">
                                            <Form.Label>Quantidade do item</Form.Label>
                                            <Form.Control type="number" placeholder="Informe a quantide do item que deseja adicionar" min={1} required/>
                                            <Form.Control.Feedback type="invalid">
                                                O valor mínimo permitido é 1.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Adicionar item <FiPlus size={20} color="white"/>
                                        </Button>
                                    </Form>
                                    <Table striped bordered hover className="mt-2">
                                        <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Quantidade</th>
                                            <th>Preço</th>
                                            <th>Ação</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Pistões novos</td>
                                            <td>4 <Button variant="primary mx-3">+</Button><Button variant="primary">-</Button></td>
                                            <td>100,00</td>
                                            <th><Button variant="danger"><FiTrash2 size={20} color="white"/>Excluir</Button></th>
                                        </tr>
                                        <tr>
                                            <td>Trocar óleo</td>
                                            <td>1 <Button variant="primary mx-3">+</Button><Button variant="primary">-</Button></td>
                                            <td>50,00</td>
                                            <th><Button variant="danger"><FiTrash2 size={20} color="white"/>Excluir</Button></th>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h2>Valor Total: 450,00</h2>
                                </ListGroup.Item>
                            </ListGroup>
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
                Histórico de Serviços
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form inline>
                    <Form.Control type="text" placeholder="Procurar por Placa" className="mr-sm-2"/>
                    <Button variant="success"><FiSearch size={20} color="white"/>Buscar</Button>
                </Form>
                <Accordion className="mt-2">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Chevrolet Celta - pft-3821 - 2012 - Em andamento - Clique para editar
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card>
                            <Card.Body>                   
                                <Card.Title>Novo Serviço</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Form className="was-validated">
                                                <Form.Group controlId="Placa">
                                                    <Form.Label>Placa</Form.Label>
                                                    <Form.Control type="text" required readOnly/>
                                                    <Form.Control.Feedback type="invalid">
                                                        Por favor, digite um placa válida.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group controlId="Status">
                                                    <Form.Label>Status</Form.Label>
                                                    <Form.Control as="select" required>
                                                        <option value={0}>Na fila</option>
                                                        <option value={1}>Em andamento</option>
                                                        <option value={2}>Finalizado</option>
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        Por favor, selecione uma opção.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Button variant="primary mr-2" type="submit">
                                                    <FiSave size={20} color="white"/>Salvar Alterações
                                                </Button>
                                                <Button variant="danger">
                                                    <FiTrash2 size={20} color="white"/>Cancelar Serviço
                                                </Button>                                                
                                            </Form>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                        <Card.Title>(Opcional)Adicionar itens:</Card.Title>
                                            <Form>
                                                <Form.Group controlId="Id_Item">
                                                    <Form.Label>Item</Form.Label>
                                                    <Form.Control as="select" required>
                                                        <option value="">Selecione algum item:</option>
                                                        <option value={0}>Ajeitar suspensão</option>
                                                        <option value={1}>Trocar óleo</option>
                                                        <option value={2}>Etc...</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId="Quantidade">
                                                    <Form.Label>Quantidade do item</Form.Label>
                                                    <Form.Control type="number" placeholder="Informe a quantide do item que deseja adicionar" min={1} required/>
                                                    <Form.Control.Feedback type="invalid">
                                                        O valor mínimo permitido é 1.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Adicionar item<FiPlus size={20} color="white"/>
                                                </Button>
                                            </Form>
                                            <Table striped bordered hover className="mt-2">
                                                <thead>
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Quantidade</th>
                                                    <th>Preço</th>
                                                    <th>Ação</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Pistões novos</td>
                                                    <td>4 <Button variant="primary mx-3">+</Button><Button variant="primary">-</Button></td>
                                                    <td>100,00</td>
                                                    <th><Button variant="danger">Excluir</Button></th>
                                                </tr>
                                                <tr>
                                                    <td>Trocar óleo</td>
                                                    <td>1 <Button variant="primary mx-3">+</Button><Button variant="primary">-</Button></td>
                                                    <td>50,00</td>
                                                    <th><Button variant="danger">Excluir</Button></th>
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
                                </Card.Body>
                            </Card>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
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
                Listagem de Serviços
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="success">
                    <FiAlignJustify size={20} color="white"/>Listar
                </Button>
                <Table striped bordered hover className="mt-2">
                    <thead>
                        <tr>
                            <th>Id Serviço</th>
                            <th>Placa</th>
                            <th>Status</th>
                            <th>Valor Total</th>
                            <th>Pago</th>
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