import React from 'react';
import {useState} from 'react';
import { Card, CardDeck, InputGroup, FormControl, Accordion, Row, Col, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Sesi from './ssionLessons';
import SesionLessons from './ssionLessons';
import './lessons.css';
import img1 from '../assets/images/icon_html.svg';
import Discus from "./discus";
const Lessons = ({judulCourse, descriptionCourse, imgCourse}) => {
    const [lessons, serLessons] = useState(
        {
            lessons1: "Lessons 1 - Perkenalan HTML",
            lessons3: "Lessons 2 - Perkenalan CSS",
        }
    )
    return (
        <Container>
            <Row>
                <Col md={4} className="">
                    <img src={img1} style={{height: '180px'}} className="img"></img>
                </Col>
                <Col className="descCourse">
                    <h2 className="border-bottom text-center jdlLessons">
                    HTML & CSS
                    </h2>
                    <p className="textDescrCourse">
                    HTML & CSS adalah bahasa yang digunakan untuk membuat dan mendesain tampilan situs web Anda. Di pelajaran ini kita akan mempelajari dasar-dasar pemrograman web sambil langsung membuat halaman web.
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
                            imgLessons="https://www.youtube.com/watch?v=IcJwRCkW4a8&feature=emb_title"
                            />
                            <div className="textDesc" style={{margin:"15px"}}>
                                <p className='descJudul'>
                                Apa itu HTML dan bagaimana cara kerjanya
                                </p>
                                <p class="descP" style={{textAlign: "justify"}}>
                                HTML adalah singkatan dari Hypertext Markup Language.
                                HTML digunakan untuk menampilkan konten pada browser. 
                                Contoh konten yang dapat ditampilkan seperti Text, Image, Video, Link, dan masih banyak lainnya.
                                Kamu bisa analogikan HTML ini sama seperti dengan Microsoft Word. 
                                HTML bersifat statis. HTML hanya bertugas menampilkan konten yang diminta oleh developer.
                                <br />
                                HTML Structure<br />
                                    HTML tersusun sebagai kesatuan dari sebuah tingkatan (family tree relationship).
                                    Saat sebuah element berada didalam element lain, maka disebut child element.
                                    Element yang berada diatas element lain disebut parent element.
                                    <br/>
                                    Contoh awal HTML Structure
                                    <br />&lt;html&gt; <br />
                                    &lt;head&gt; <br />
                                            &lt;!-- Informasi yang tidak akan tampil di browser --&gt; <br />
                                            &lt;meta  charset='utf-8'&gt; <br />
                                            &lt;meta  http-equiv='X-UA-Compatible' content='IE=edge''&gt; <br />
                                            &lt;title&gt;  Pages Title &lt;/title&gt;<br />
YouTube
Tutorial HTML Part 4 - Struktur Dasar HTML
Tutorial HTML Part 4 akan membahas mengenai struktur dasar dari HTML, kita akan bahas struktur tag dari skrip yang sudah kita tulis di part sebelumnyaLink Tu...
[Video]
&lt;link rel='stylesheet' type='text/css' media='screen' href='main.css &gt; <br />
                                            &lt; script src='main.js'&gt; &lt;/script'&gt;
                                    <br />&lt;head&gt;
                                        &lt;body&gt;<br />
                                            &lt;!-- Semua yang akan ditampilkan di browser --&gt; <br />
                                            &lt;h1&gt;Hellow Word! &lt;/h1&gt;
                                            &lt;/body&gt;
                                    <br />&lt;/html&gt;
                                </p>
                            </div>
                            <Discus pertanyaan="ikuti Contoh diatas ?"/>
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
                            imgLessons="https://www.youtube.com/watch?v=A0fSBAibfXY"
                            />
                            <div className="textDesc" style={{margin:"15px"}}>
                                <p className='descJudul'>
                                Apa itu CSS? Dan apa Fungsinya?
                                </p>
                                <p class="descP" style={{textAlign: "justify"}}>
                                Cascading Style Sheets singkatan
                                CSS adalah kode untuk memberikan style pada element-element di website kita.
                                Selain mempercantik tampilan website, CSS juga digunakan untuk membuat tampilan website menjadi adaptive ataupun responsive.<br/>
                                Menyisipkan CSS ke dalam HTML <br />
                                Inline styles <br />
                                Internal styles <br />
                                External styles <br />
                                </p>
                            </div>
                            <Discus pertanyaan="Buat contoh css dengan 3 style diatas ?"/>
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
export default Lessons;