import React from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom'
import { Card, CardDeck, InputGroup, FormControl, Accordion} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./discus.css";
const Discus = ({pertanyaan}) => {
    const [diskusi, setDiskusi] = useState([""]);
      const [diskusiTemp, setDiskusiTemp] = useState("");
      const myStyle = {
        maxWidth: 100,
      }; 
    return (
        <div className="chat position-relative">
                {diskusi.map((item) => {
                return (
                    <Card className="list">
                        <Card.Body >
                        <Card.Title>{pertanyaan}</Card.Title>
                            <Card.Text key={item}>
                            {item}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
                })}
                <InputGroup className="mb-3 inputDiscus" style={{}}>
                <FormControl 
                    className="jwb" style={{height: '10rem'}}
                    placeholder="Ketik Jawaban"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    as="textarea"
                    onChange={(evt) => setDiskusiTemp(evt.target.value)}
                />
                </InputGroup>
                <button onClick={() => setDiskusi([...diskusi, diskusiTemp])} className="btnDiscus">
                Kirim
                </button> 
            </div> 
    )
}
export default Discus;