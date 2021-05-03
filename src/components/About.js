import React from 'react';
import './About.css';
import { Image, Container, Card } from 'react-bootstrap';
import header_about_us from '../assets/images/header_about_us.jpg';
import aminah from '../assets/images/aminah.jpg';
import fajrin from '../assets/images/fajrin.jpg';
import putri from '../assets/images/putri.jpg';
import Footer from '../components/Footer';

const About = () =>{
    return (
      <div>
      <section className="section-header">
        <img
            className="banner-about"
            src={header_about_us}
        />
      </section>
    
      <section className="section-about-us">
         <Container>
            <h1>About Us</h1>
            <p>Dalam menghadapai era digital dan sistem pembelajaran saat ini sudah sangat berubah. 
            Dari pembelajaran yang dulu hanya bisa dilakukan dengan tatap muka, dan sekarang dilakukan serba online.</p>

            <p>
            Kilar Academy hadir untuk menjawab tantangan belajar saat kini. Pada website ini, anda bisa mengakses materi tanpa batas dalam meningkatkan keterampilan belajar bahasa pemrograman
            </p>


        </Container>

        <Container className="container-testimoni">
            <Card style={{ width: '18rem' }}  className="card-testimoni">
                <Card.Img variant="top" src={ aminah } />
                <Card.Body>
                    <Card.Title>Aminah</Card.Title>
                </Card.Body>
            </Card> 
            <Card style={{ width: '18rem' }} className="card-testimoni">
                <Card.Img variant="top" src={ fajrin } />
                <Card.Body>
                    <Card.Title>Fajrin Nur Utami</Card.Title>
                </Card.Body>
            </Card> 
            <Card style={{ width: '18rem' }} className="card-testimoni">
                <Card.Img variant="top" src={ putri } />
                <Card.Body>
                    <Card.Title>Putri Rokhmayati</Card.Title>

                </Card.Body>
            </Card> 
        </Container>
       
        </section>
  </div>
    );
}

export default About;