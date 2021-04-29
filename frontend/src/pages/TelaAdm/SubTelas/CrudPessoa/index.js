import {Button, Container, Form, Card, Modal, Row, Col, Table} from 'react-bootstrap';
import {cpf} from 'cpf-cnpj-validator'; //será usado futuramente para validar CPF
import React,{useState} from 'react';
import {FiPlus, FiArrowLeft, FiSearch, FiAlignJustify, FiSave, FiTrash2, FiX} from 'react-icons/fi';

export default function CrudPessoa(){

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
                        <Button block variant="outline-light" disabled>
                            Pessoa
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
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
                        
                        <Card.Title>Nova pessoa</Card.Title>
                        <Form className="was-validated">
                            <Form.Group controlId="CPF">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" placeholder="Digite o seu CPF" required />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, digite um CPF válido.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="NomeCompleto">
                                <Form.Label>Nome completo</Form.Label>
                                <Form.Control type="text" placeholder="Digite o seu nome completo" required/>
                                <Form.Control.Feedback type="invalid">
                                    Por favor, digite seu nome completo.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite o seu email" required/>
                                <Form.Control.Feedback type="invalid">
                                    Por favor, digite um e-mail válido.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="Password">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" required maxlenght="15"/>
                                <Form.Control.Feedback type="invalid">
                                    Por favor, digite uma senha com menos de 16 caracteres.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="Tipo">
                                <Form.Label>Tipo da Pessoa</Form.Label>
                                <Form.Control as="select" required>
                                    <option value={0}>Cliente</option>
                                    <option value={1}>Admin</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Por favor, selecione uma opção.
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
                Buscar Pessoas
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form inline>
                    <Form.Control type="text" placeholder="Procurar por CPF" className="mr-sm-2"/>
                    <Button variant="success"><FiSearch size={20} color="white"/>Buscar</Button>
                </Form>
                <Form className="was-validated mt-2">
                    <Form.Group controlId="CPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite o seu CPF" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite um CPF válido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="NomeCompleto">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="text" placeholder="Digite o seu nome completo" required/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite seu nome completo.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite o seu email" required/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite um e-mail válido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" required maxlenght="15"/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite uma senha com menos de 16 caracteres.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Tipo">
                        <Form.Label>Tipo da Pessoa</Form.Label>
                        <Form.Control as="select" required>
                            <option value={0}>Cliente</option>
                            <option value={1}>Admin</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite uma senha com menos de 16 caracteres.
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
                Listagem de Pessoas
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="success">
                    <FiAlignJustify size={20} color="white"/>Listar
                </Button>
                <Table striped bordered hover className="mt-2">
                    <thead>
                        <tr>
                            <th>CPF</th>
                            <th>Nome completo</th>
                            <th>E-mail</th>
                            <th>ADM</th>
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