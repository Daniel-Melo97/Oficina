import {Button, Container, Form, Card, Modal} from 'react-bootstrap';
import {cpf} from 'cpf-cnpj-validator'; //será usado futuramente para validar CPF
import React,{useState} from 'react';

export default function Login(){

    const [show, setShow] = useState(false);

   
    return(
        <>
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
                    <Button variant="success">Buscar</Button>
                </Form>
                <Form className="was-validated">
                    <Form.Group controlId="CPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite o seu CPF" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite um CPF válido.
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
                    <Button variant="primary mr-2" type="submit">
                        Atualizar
                    </Button>
                    <Button variant="danger">
                        Deletar
                    </Button>
                </Form>

            </Modal.Body>
        </Modal>




        <Container className="mt-2">
            
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
                    <Button variant="primary" type="submit">
                        Criar
                    </Button>
                </Form>
                
            </Card.Body>
            </Card>
            <Card className="mt-2">
                <Card.Title>Outras opções:</Card.Title>
                <Card.Body className="d-flex justify-content-center">
                    <Button variant="danger mr-2">Voltar</Button>
                    <Button variant="success" onClick={() => setShow(true)}>Buscar</Button>
                </Card.Body>
            </Card>
                        
            

        </Container>
       </>
    );
}