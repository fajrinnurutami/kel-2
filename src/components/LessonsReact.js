import React from 'react';
import {useState} from 'react';
import { Card, CardDeck, InputGroup, FormControl, Accordion, Row, Col, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Sesi from './ssionLessons';
import SesionLessons from './ssionLessons';
import './lessons.css';
import img1 from '../assets/images/icon_react.svg';
import Discus from "./discus";
const LessonsReact = ({judulCourse, descriptionCourse, imgCourse}) => {
    const [lessons, serLessons] = useState(
        {
            lessons1: "Lessons 1 - Perkenalan React",
            lessons3: "Lessons 2 - Component",
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
                    React
                    </h2>
                    <p className="textDescrCourse">
                    React adalah perpusatakaan JavaScript yang digunakan untuk menghias situs web.
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
                            imgLessons="https://www.youtube.com/watch?v=5kHyviqjhCk"
                            />
                            <div className="textDesc" style={{margin:"15px"}}>
                                <p className='descJudul'>
                                Introduction
                                </p>
                                <p class="descP" style={{textAlign: "justify"}}>
                                Apa itu React Js ? <br />
                                    React JS dibuat oleh Tim Engineer Facebook. Facebook menggunakan React JS pada sisi front-end. React JS masih unggul diantara Framework Javascript lainnya seperti Vue dan Angular menurut Google Trends. React JS adalah framework view library Javascript untuk membuat tampilan (user interface) pada website <br />
                                    Kenapa menggunakan React JS? <br />
                                    React JS is FAST.
                                    React JS membuat aplikasi front-end menjadi lebih cepat walapun harus menghandle berbagai data.
                                    React JS is MODULAR.
                                    Kita dapat menerapkan konsep Modular javascript pada React JS. React JS membagi 1 tampilan pada website menjadi komponen-komponen kecil. <br />
                                    Contoh : <br />
                                    Biasanya website memiliki beberapa bagian yang bisa kita pisahkan, seperti Navbar, Button, Content, Footer
                                    Ke 4 hal tersebut, bisa kita pisahkan menjadi component
                                    React JS is Scalable.
                                    React JS dapat digunakan pada aplikasi berskala kecil hingga besar dan kompleks.
                                </p>
                            </div>
                            <Discus pertanyaan="Cari referensi dan rangkum mengenai introduction react "/>
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
                            imgLessons="https://www.youtube.com/watch?v=eXMARj2quVU"
                            />
                            <div className="textDesc" style={{margin:"15px"}}>
                                <p className='descJudul'>
                                Membuat Component
                                </p>
                                <p class="descP" style={{textAlign: "justify"}}>
                                    Ada 2 cara membuat component:<br/>
                                    Gunakan function <br/>
                                    Gunakan class <br/>
                                    Kebanyakan kasus dan dokumentasi resmi React JS merekomendasikan menggunakan function.
                                    Praktek Membuat Component <br/>
                                    STEP 1 - Buat Sebuah Project <br/>
                                    Npx create-react-app namaApp <br/>
                                    Cd namaApp <br/>
                                    STEP 2 - Buka project yang telah dibuat pada code editor <br/>
                                    STEP 3 - Jalankan React JS <br/>
                                    Npm start <br/>
                                    STEP 4 - Buat folder components. <br/>
                                    Kita akan membuat 3 component. <br/>
                                    Kita akan membuat component <br/>
                                    Avatar <br/>
                                    CourseCard <br/>
                                    StudentInfo <br/>
                                    Component Avatar <br/>
                                    Buat folder asset didalam diektori src. <br/>
                                    Buat file avatar.css sejajar dengan file component. <br/>
                                    Nama folder, file, dan function component HARUS menggunakan huruf besar diawal dan kata selanjutnya.
                                </p>
                            </div>
                            <Discus pertanyaan=" ikuti contoh video diatas " />
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
export default LessonsReact;