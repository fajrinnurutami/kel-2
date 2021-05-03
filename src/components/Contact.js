import React from 'react';
import {useState} from 'react';
import {Col, Form, Button, Modal, Row, Container} from 'react-bootstrap';
import './Contact.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faPhoneAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';

const ContactUs = () => {
        const [show, setShow] = useState(false);
        const [validated, setValidated] = useState(false);
        const reload=()=>window.location.reload();
        const handleClose = () => {
            setShow(false);
            reload();
        };
        const handleShow = (e) => {
            setShow(true);
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        };
    return (
        <div>
            <Container className="container-contact">
            <Row>
                <Col md={4}>
                    <div className="col">
                        <h2>
                            Contact Informasi
                        </h2>
                        <div className="alamat">
                            <p>
                                Alamat
                            </p>
                            <div className="d-flex flex-row">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa justify-content-center text-items-center"/>
                                <p className="text">
                               Jakarta, Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="contact">
                            <p>
                                Telepon
                            </p>
                            <div className="d-flex flex-row ">
                                <FontAwesomeIcon icon={faPhoneAlt} className="fa justify-content-center text-items-center"/>
                                <p className="text">
                                Ami - 081291226892 <br />
                                Fajrin - 089636056393 <br />
                                Putri - 082237015858 <br />
                                </p>
                            </div>
                        </div>
                        <div className="email">
                            <p>
                                Support
                            </p>
                            <div className="d-flex flex-row">
                                <FontAwesomeIcon icon={faEnvelope} className="fa justify-content-center text-items-center"/>
                                <p className="text">
                               Ami - a123minah@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="icon">
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="form">
                        <h2>
                            Contact Us
                        </h2>
                        {/* form Contact Us */}
                        <Form validated={validated} onSubmit={handleShow}>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="validationCustom01">
                                <Form.Label>Nama Depan</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="validationCustom02">
                                <Form.Label>Nama Belakang</Form.Label>
                                <Form.Control
                                required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="10" controlId="formHorizontalEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required type="email" placeholder="Email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1" as={Col} md="10">
                                    <Form.Label>Pesan</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Masukan Pesan Anda"/>
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit">Kirim</Button>
                        </Form>
                        {/* Alert */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Popup</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Terimakasih pesan anda sudah terkirim!</Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={handleClose} type="reset">
                                OK
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
            </Container>
            <Footer />
        </div>
    )
}
export default ContactUs;