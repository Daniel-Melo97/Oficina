import {Button, Container, Form, Card, Modal, Row, Col, Table} from 'react-bootstrap';
import {cpf} from 'cpf-cnpj-validator'; //será usado futuramente para validar CPF
import React,{useState} from 'react';
import {FiPlus, FiArrowLeft, FiSearch, FiAlignJustify, FiSave, FiTrash2, FiX} from 'react-icons/fi';

export default function TelaDados(){

    const [show, setShow] = useState(false);
    const [showList, setShowList] = useState(false);

   
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
                        <Button block variant="outline-light" disabled>
                            Alterar dados
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
                </Container>
            </Col>
            <Col sm={10}>
                <Container className="mt-2" fluid>
                    
                    <Card>
                    <Card.Body>
                        
                        <Card.Title>Alterar dados</Card.Title>
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
                            <Button variant="success" type="submit">
                                Salvar Alterações <FiPlus size={20} color="white"/>
                            </Button>
                        </Form>
                        
                    </Card.Body>
                    </Card>
                    <Card className="mt-2">
                        
                        <Card.Body >
                            <Card.Title>Outras opções:</Card.Title>
                            <Row className="d-flex justify-content-center">
                                <Button variant="warning mr-2"><FiArrowLeft size={20} color="black"/>Voltar</Button>
                                <Button variant="danger"><FiTrash2 size={20} color="white"/>Deletar conta</Button>
                            </Row>                    
                        </Card.Body>
                    </Card>
                                
                    

                </Container>
            </Col>
        </Row>

       </>
    );
}