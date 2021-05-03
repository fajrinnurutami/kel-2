import React from 'react';
import './Register.css';
import { Form, Button, Container, Card } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const Register = () =>{
    const history = useHistory()
    return (
        <div>
            <section className="section-register">
            <h1>Selamat Datang di Tech Muda Course</h1>
            <Container className="container-login">
            
            <Card style={{ width: '25rem' }} className="card-login">
                <Form className="form-login">
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nama Depan</Form.Label>
                        <Form.Control type="name" placeholder="masukkan nama depan" width="400px"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nama Belakang</Form.Label>
                        <Form.Control type="name" placeholder="masukkan nama belakang" width="400px"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Alamat Email</Form.Label>
                        <Form.Control type="email" placeholder="masukkan email" width="400px"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="masukkan password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Konfirmasi Password</Form.Label>
                        <Form.Control type="password" placeholder="masukkan password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="saya setuju dengan kebijakan syarat &amp; ketentuan dan kebijakan privasi" />
                    </Form.Group>
                    <Button onClick={()=> history.push('/login')} variant="primary" block active>
                    Daftar
                    </Button>{''}
                </Form>
                </Card>
            </Container>    
            </section>
        </div>
    );
}
        
export default Register;