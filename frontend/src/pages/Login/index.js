import {Button, Container, Form, Image, Card} from 'react-bootstrap';


export default function Login(){
   
    return(
        <Container >
            
            <Container className="justify-content-center d-flex mb-4">
                <Image src="https://uploads.metropoles.com/wp-content/uploads/2021/03/02104543/Mercedes-5-1024x683.jpg" rounded width="500px" />
            </Container>
            
            <Card>
            <Card.Body>
                
                <Card.Title>Login</Card.Title>
                <Form>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite o seu email" />
                    </Form.Group>

                    <Form.Group controlId="Password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>
                
            </Card.Body>
            </Card>
                        
            

        </Container>
       
    );
}