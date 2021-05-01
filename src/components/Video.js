import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResponsiveEmbed } from 'react-bootstrap';

const Video = () =>{
    return (
        <div style={{ width: 660, height: 'auto' }}>
  <ResponsiveEmbed aspectRatio="16by9">
    <embed type="image/svg+xml" src="/TheresaKnott_castle.svg" />
  </ResponsiveEmbed>
</div>

    );
}

export default Video;