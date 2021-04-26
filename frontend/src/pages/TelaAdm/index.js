import {Button, Container, Form, Col, Row, Navbar, Nav, Table, FormControl, ButtonToolbar,ButtonGroup} from 'react-bootstrap';


export default function TelaAdm(){
   
    return(
        <Container fluid>
            <Row >
                <Col sm={2} className="bg-dark">
                    <Row className="p-2">
                        <h1 className="text-light">Editar</h1>
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
                        <Button block variant="outline-light">
                            Serviço
                        </Button>
                    </Row>
                    <Row className="p-2">
                        <Button block variant="outline-light">
                            Item
                        </Button>
                    </Row>
                    
                </Col>
                <Col sm={10}>
                    <Row>
                        <Navbar bg="light" expand="lg" block>
                            <Navbar.Brand href="#home">Tela ADM</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Navbar.Brand>Filtrar: </Navbar.Brand>
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                    <ButtonGroup className="mr-2" aria-label="First group">
                                        <Button>Na Fila</Button> 
                                        <Button>Em andamento</Button> 
                                        <Button>Finalizado</Button> 
                                    </ButtonGroup>
                                </ButtonToolbar>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Procurar por modelo" className="mr-sm-2"/>
                                    <Button variant="success">Buscar</Button>
                                </Form>
                                <Navbar.Brand><Button variant="danger" className="mx-2">Deslogar</Button></Navbar.Brand>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                    <Row>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Status</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Dono</th>
                                <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Em andamento</td>
                                <td>Chevrolet</td>
                                <td>Corsa</td>
                                <td>Manoel</td>
                                <td><Button>Editar</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    
                </Col>

            </Row>
            
           

        </Container>
       
    );
}