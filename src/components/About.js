import React from 'react';
import './About.css';
import { Image, Container, Card } from 'react-bootstrap';
import header_about_us from '../assets/images/header_about_us.jpg';
import aminah from '../assets/images/aminah.jpg';
import fajrin from '../assets/images/fajrin.jpg';
import profile3 from '../assets/images/profile3.png';
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
            <p>Proses program berlangsung dari tahun 2019 sampai dengan 2020, program ini bertujuan untuk memberikan pelatihan Informasi Teknologi dan kesempatan bekerja untuk 150 peserta dengan komposisi 70% adalah wanita dan pencapaian 80% mendapatkan pekerjaan. Salah satu komponen penting dari proyek Tech Muda adalah Pelatihan IT untuk kaum muda marjinal, terutama kaum muda perempuan, yang berkelanjutan. Program Tech Muda mempunyai tujuan untuk membuka peluang kerja untuk peserta Tech Muda, membuka peluang kerja mandiri (Gig Economy) untuk peserta Tech Muda.
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
                <Card.Img variant="top" src={ profile3 } />
                <Card.Body>
                    <Card.Title>Putri Rohmayati</Card.Title>

                </Card.Body>
            </Card> 
        </Container>
       
        </section>
        <Footer />
  </div>
    );
}

export default About;