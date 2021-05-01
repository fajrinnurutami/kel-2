import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card, Button  } from 'react-bootstrap';
import icon_mind from '../assets/images/icon_mind.svg';
import icon_data from '../assets/images/icon_data.svg';
import icon_proposal from '../assets/images/icon_proposal.svg';
import icon_chat from '../assets/images/icon_chat.svg';
import about_img from '../assets/images/about_img.svg';
import image1 from '../assets/images/image1.svg';
import testi1 from '../assets/images/testi1.jpg';
import testi2 from '../assets/images/testi2.jpg';
import testi3 from '../assets/images/testi3.jpg';
import {useHistory} from 'react-router-dom';



const Home = () =>{
    const history = useHistory()
    return (
        <div>
            <section className="section-header">
            <Container>
            <Row>
                <Col className="col-title">
                    <h1>Persiapkan Karier Kaum Muda</h1>
                    <p>Selamat datang di Tech Muda Course</p>
                    <Button onClick={()=> history.push('/about')} variant="primary" size="lg" active>
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
                    <Col className="col-course">
                        <p>Jelajahi kursus online</p>
                    </Col>
                </Row>
            </Container>
     
            <Container className="container-course">
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Img variant="top" src={icon_mind} className="img-course"/>
                    <Card.Body>
                        <Card.Title className="card-title">Computer Science</Card.Title>
                        <Button variant="primary" className="card-button">Beli Course</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Img variant="top" src={icon_data} className="img-course"/>
                    <Card.Body>
                        <Card.Title className="card-title">Data Analisis and Statistic</Card.Title>
                        <Button variant="primary">Beli Course</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Img variant="top" src={icon_proposal} className="img-course"/>
                    <Card.Body>
                        <Card.Title className="card-title">Business and Management</Card.Title>
                        <Button variant="primary">Beli Course</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Img variant="top" src={icon_chat} className="img-course"/>
                    <Card.Body>
                        <Card.Title className="card-title">Social Sciences</Card.Title>
                        <Button variant="primary">Beli Course</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-course">
                    <Card.Img variant="top" src={icon_mind} className="img-course"/>
                    <Card.Body>
                        <Card.Title className="card-title">Biology and Life Sciences</Card.Title>
                        <Button variant="primary">Beli Course</Button>
                    </Card.Body>
                </Card>
            </Container>
            </section>

            <section className="section-beasiswa">
            <Container>
            <Row>
            <Col>
                <img
                    className="banner"
                    src={about_img}
                />
            </Col>

            <Col className="col-beasiswa">
                <h1>Dapatkan 100% Beasiswa Tech Muda</h1>
                <p>Program 100% Beasiswa dikhususkan untuk perempuan Indonesia</p>
                <Button variant="primary" size="lg" active>
                Lihat Persyaratan
                </Button>{' '}
            </Col>
            </Row>
        </Container>
        </section>

        <section className="section-video">
        <Container className="container-video">
            <h1>Graduation Tech Muda</h1>
                
                <iframe 
                    src="https://www.youtube.com/embed/aVoRP0xuCLA" 
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>    
        </Container>
        </section>
        
        <section className="section-testimoni">
            <Container className="container-testimoni">
                <h1 style={{ marginTop: -300, paddingBottom: 100}}
>Testimoni</h1>
                <Card style={{ width: '18rem' }}  className="card-testimoni">
                    <Card.Img variant="top" src={ testi1 } />
                    <Card.Body>
                        <Card.Title>Mawar</Card.Title>
                        <Card.Text>
                        Great teaching, recommended teacher. Dan semua lulusannya "from zero to hero".
                        </Card.Text>
                    </Card.Body>
                </Card> 
                <Card style={{ width: '18rem' }} className="card-testimoni">
                    <Card.Img variant="top" src={ testi2 } />
                    <Card.Body>
                        <Card.Title>Melati</Card.Title>
                        <Card.Text>
                        Great teaching, recommended teacher. Dan semua lulusannya "from zero to hero".
                        </Card.Text>
                    </Card.Body>
                </Card> 
                <Card style={{ width: '18rem' }} className="card-testimoni">
                    <Card.Img variant="top" src={ testi3 } />
                    <Card.Body>
                        <Card.Title>Indah</Card.Title>
                        <Card.Text>
                        Great teaching, recommended teacher. Dan semua lulusannya "from zero to hero".
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </Container>
            
        </section>
    </div>
    );
}

export default Home;