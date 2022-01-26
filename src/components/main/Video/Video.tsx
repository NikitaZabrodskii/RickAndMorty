import React from "react";
import './bgVideo.scss';
import rick from '../../../img/rick.mp4'


export default function Video() {
   
  return (
    <div className="bg-video" >
      <video autoPlay muted loop className="bg-video__content">
        <source src={rick} type="video/mp4" />
      
        Your browser is not supported!
      </video>
    </div>
  );
}
