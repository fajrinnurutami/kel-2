import React from 'react';
import './Login.css';
import { Form, Button, Container, Card } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () =>{
    const history = useHistory()
    return (
        <div>
            <section className="section-login">
            <h1>Selamat Datang di Tech Muda Course</h1>
            <Container className="container-login">
            
            <Card style={{ width: '25rem' }} className="card-login">
                <Form className="form-login">
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Alamat Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" width="400px"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Ingat saya" />
                    </Form.Group>
                    <Button onClick={()=> history.push('/')} variant="primary" block active>
                    Masuk
                    </Button>{''}
                </Form>
                </Card>
            </Container>    
            </section>
            <Footer />
        </div>
    );
}
        
export default Login;