import React from "react";
import styles from "./BgVideo.module.scss";
import rickAndMorty from "../../../img/rick.mp4";

export  function Video() {
  return (
    <div className={styles.bgVideo}>
      <video autoPlay muted loop className={styles.content}>
        <source src={rickAndMorty} type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
}
