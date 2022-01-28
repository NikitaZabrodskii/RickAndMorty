import React from "react";
import "./bgVideo.scss";
import rickAndMorty from "../../../img/rick.mp4";

export  function Video() {
  return (
    <div className="bg-video">
      <video autoPlay muted loop className="bg-video__content">
        <source src={rickAndMorty} type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
}
