import React from 'react';
import {useState} from 'react';
import { Card, CardDeck, InputGroup, FormControl, Accordion, Row, Col, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Sesi from './ssionLessons';
import SesionLessons from './ssionLessons';
import './lessons.css';
import img1 from '../assets/images/icon_html.svg';
import Discus from "./discus";
const LessonsJavascript = ({judulCourse, descriptionCourse, imgCourse}) => {
    const [lessons, serLessons] = useState(
        {
            lessons1: "Lessons 1 - Perkenalan JavaScript",
            lessons3: "Lessons 2 - Console.log",
        }
    )
    return (
        <Container>
            <Row>
                <Col md={4} className="position-relative okeh">
                    <img src={img1} style={{height: '180px'}} className="img"></img>
                </Col>
                <Col className="descCourse">
                    <h2 className="border-bottom text-center jdlLessons">
                    JavaScript ES6
                    </h2>
                    <p className="textDescrCourse">
                    Bahasa fleksibel yang digunakan di mana saja, mulai dari situs web interaktif hingga server backend. ES6 adalah versi JavaScript yang terbaru. Ini adalah standar baru untuk penulisan JavaScript, sebuah bahasa pemrogramman yang populer. ES6 dan ES5 adalah JavaScript dalam versi yang berbeda. Jika Anda mempelajari JavaScript untuk pertama kalinya, sebaiknya mulai dengan versi terbarunya, ES6. Nama dari JavaScript terdahulu telah diubah, tetapi isinya sama.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="Accrodion">
                    <Accordion defaultActiveKey="0" >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="toggleLessons" >
                        {lessons.lessons1}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <div className="lessons-wrapper">
                            <SesionLessons 
                            judulLessons={lessons.lessons1}
                            imgLessons="https://www.youtube.com/watch?v=s--1X0_7nBE"
                            />
                            <div className="textDesc" style={{margin:"15px"}}>
                                <p className='descJudul'>
                                Introduction
                                </p>
                                <p class="descP" style={{textAlign: "justify"}}>
                                Kebutuhan pengembangan web saat ini tidak seperti dulu lagi, banyak aplikasi berbasis web yang semakin kompleks.
                                <br />
                                Dan hal itu tidak mungkin atau minimal sulit jika hanya mengandalkan versi Javascript lama. Oleh karena itu dikeluarkan standar standar baru untuk mensupport kebutuhan tersebut.
                                </p>
                                <p>
                                Var, Let, and Const
                                <br />
                                    Secara fungsionalitas var, let dan const bisa dibilang SAMA, karena untuk mendeklarasikan sebuah variabel menggunakan Javascript.
                                    <br />
                                    Perbedaannya adalah di SCOPE dan mengubah nilai pada variabel tersebut setelah di deklarasi.
                                    <br />
                                    Untuk variabel ‘const’, kita tidak bisa mengubah / mengganti nilai tersebut, karena bersifat KONSTAN.
                                    <br />
                                    Contoh : 
                                    <br />
                                    Const name = “Ridho Abdul Majid”
                                    <br />
                                    Name = “david winalda”
                                    <br />
                                    Hasil :
                                    Error
                                    <br />
                                    Penggunaan var, dan let biasa dibedakan dengan SCOPE-nya,
                                    Global Scope : sebuah variabel yang dapat diakses oleh keseluruhan bagian dalam sebuah file Javascript.
                                    <br />
                                    Global Scope : sebuah variabel yang dapat diakses oleh keseluruhan bagian dalam sebuah file Javascript.
                                    <br />
                                    Local Scope : adalah sebuah variabel yang dapat diakses di dalam BLOCK SCOPE-nya, di mana sebuah variabel tersebut di deklarasikan .
                                 </p>
                            </div>
                            <Discus pertanyaan="Buatlah Rangkuman mengenai ES6 ?"/>
                        </div>  
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="toggleLessons" >
                        {lessons.lessons3}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        <div className="lessons-wrapper">
                            <SesionLessons 
                            judulLessons={lessons.lessons3}
                            imgLessons="https://www.youtube.com/watch?v=pkFbigsR7jI"
                            />
                            <div className="textDesc" style={{margin:"15px"}}>
                                <p className='descJudul'>
                                Apa itu HTML dan bagaimana cara kerjanya
                                </p>
                                <p class="descP" style={{textAlign: "justify"}}>
                                Pertama, kita akan melihat cara menjalankan (mengeksekusi) code ES6 dan mencetak (menampilkan) rangkaian kata di layar yang disebut console. Saat Anda menulis code console.log("Hello World");, rangkaian huruf Hello World akan di cetak di console.
                                </p>
                            </div>
                            <Discus pertanyaan=" jalankan perintah console.log(Selamat datang di ES6 Study I!); ?"/>
                        </div>  
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}
export default LessonsJavascript;