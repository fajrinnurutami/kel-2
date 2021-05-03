import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card, Button  } from 'react-bootstrap';
import icon_html from '../assets/images/icon_html.svg';
import icon_js from '../assets/images/icon_js.svg';
import icon_react from '../assets/images/icon_react.svg';
import about_img from '../assets/images/about_img.svg';
import image1 from '../assets/images/image1.svg';
import testi1 from '../assets/images/testi1.jpg';
import testi2 from '../assets/images/testi2.jpg';
import testi3 from '../assets/images/testi3.jpg';
import {useHistory} from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () =>{
    const history = useHistory()
    return (
        <div>
            <section className="section-header-home">
            <Container>
            <Row>
                <Col className="col-title">
                    <h1>Hi, Let's Study Hard!</h1>
                    <p>Mari Kita Belajar Bersama-Sama</p>
                    <Button onClick={()=> history.push('/login')} variant="primary" size="lg" active>
                    Siap untuk Memulai?
                    </Button>{''}
                </Col>

                <Col>
                    <img
                        className="banner"
                        src={image1}
                    />
                </Col>
            </Row>
            </Container>
            </section>

            <section className="section-course">
            <Container>
                <Row>
                    <Col className="col-course">
                        <h1>Jelajahi</h1>
                        <h3>Kursus Terpopuler Kami</h3>
                    </Col>
                </Row>
            </Container>
     
            <Container className="container-course">
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Body>
                        <Card.Title className="card-title">HTML &amp; CSS</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={icon_html} className="img-course"/>
                </Card>
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Body>
                        <Card.Title className="card-title">Javascript ES6</Card.Title>                       
                    </Card.Body>
                    <Card.Img variant="top" src={icon_js} className="img-course"/>
                </Card>
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Body>
                        <Card.Title className="card-title">React JS</Card.Title>                       
                    </Card.Body>
                    <Card.Img variant="top" src={icon_react} className="img-course"/>
                </Card>
            </Container>
            </section>

        <section className="section-video">
        <h1 className="title-video">Graduation Day</h1>
        <Container className="container-video">
            <iframe 
                src="https://www.youtube.com/embed/aVoRP0xuCLA" 
                title="YouTube video player" 
                frameborder="50px" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>    
        </Container>
        </section>
        
        <section className="section-testimoni">
        <h1 className="title-testimoni">Testimoni Alumni</h1>
            <Container className="container-testimoni">
                <Card style={{ width: '18rem' }}  className="card-testimoni">
                    <Card.Img variant="top" src={ testi1 } />
                    <Card.Body>
                        <Card.Title>Mawar</Card.Title>
                        <Card.Text>
                        Great teaching, recommended mentor. 
                        </Card.Text>
                    </Card.Body>
                </Card> 
                <Card style={{ width: '18rem' }} className="card-testimoni">
                    <Card.Img variant="top" src={ testi2 } />
                    <Card.Body>
                        <Card.Title>Jati</Card.Title>
                        <Card.Text>
                        Materi dan penjelasannya sangat mudah dipahami.
                        </Card.Text>
                    </Card.Body>
                </Card> 
                <Card style={{ width: '18rem' }} className="card-testimoni">
                    <Card.Img variant="top" src={ testi3 } />
                    <Card.Body>
                        <Card.Title>Melati</Card.Title>
                        <Card.Text>
                        Sangat membantu saya yang ingin berkarier di bidang teknologi
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </Container>
            
        </section>
    </div>
    );
}

export default Home;