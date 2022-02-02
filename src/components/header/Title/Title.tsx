import React from "react";
import styles from "./Title.module.scss";

import png from "../../../img/pngegg.png";


export const Title = () => {
  return (
    <img src={png} alt="logo" height={300} width={900} className={styles.title} />
  );
};
