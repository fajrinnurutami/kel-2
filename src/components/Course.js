import React from 'react';
import {useState} from 'react';
import { Card, CardDeck, InputGroup, FormControl, Accordion, Container, Nav} from 'react-bootstrap';
import './Course.css';
import "bootstrap/dist/css/bootstrap.min.css";
import icon_html from '../assets/images/icon_html.svg';
import icon_js from '../assets/images/icon_js.svg';
import icon_react from '../assets/images/icon_react.svg';
import { Link } from 'react-router-dom';
import lessonsHTML from './lessonsHTML';
const Course = () => {
    return (
        <div className="cont">
            <h2 className="text-center">Cari tau dari mana anda mau mulai! </h2>
            <Container className="contCourse">
                <Nav.Link href='/lessonsHTML'>
                <Card style={{ width: '18rem' }} className="cardCourse">
                    <Card.Body>
                        <Card.Title className="cardTitle">HTML &amp; CSS</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={icon_html} className="imgCourse"/>
                    <Card.Text className="text">
                    Bahasa digunakan untuk membuat dan mendesain tampilan setiap situs web.
                    </Card.Text>
                </Card>
                </Nav.Link>
                <Nav.Link href="/lessonsJava">
                <Card style={{ width: '18rem' }} className="cardCourse">
                    <Card.Body>
                        <Card.Title className="cardTitle">Javascript ES6</Card.Title>                       
                    </Card.Body>
                    <Card.Img variant="top" src={icon_js} className="imgCourse"/>
                    <Card.Text className="text">
                    Bahasa fleksibel yang digunakan di mana saja, mulai dari situs web interaktif hingga server backend.
                    </Card.Text>
                </Card>
                </Nav.Link>
                <Nav.Link href="/lessonsReact">
                <Card style={{ width: '18rem' }} className="cardCourse">
                    <Card.Body>
                        <Card.Title className="cardTitle">React JS</Card.Title>                       
                    </Card.Body>
                    <Card.Img variant="top" src={icon_react} className="imgCourse"/>
                    <Card.Text className="text">
                    React adalah perpusatakaan JavaScript yang digunakan untuk menghias situs web.
                    </Card.Text>
                </Card>
                </Nav.Link>
            </Container>
        </div>
    )
}
export default Course;