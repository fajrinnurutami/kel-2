import React from 'react';
import {useState} from 'react';
import { Card, CardDeck, InputGroup, FormControl, Accordion} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import './ssionLessons.css';
const SesionLessons = ({judulLessons,  imgLessons}) => {
    return (
        <div className="container">
            <h2 className="text-center jdlSesiLessons">
                {judulLessons}
            </h2>
            {/* <iframe 
                src={imgLessons}
                title="YouTube video player" 
                frameborder="50px" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                >
            </iframe> */}
            <ReactPlayer className="video "
                url={imgLessons}
            />
        </div>
    )
}
export default SesionLessons;