import React from "react";
import { FC } from "react";
import './title.scss'

import png from '../../../img/pngegg.png';

export const Title: FC = () => {
  return (
    <img src={png} alt="logo" height={300} width={900} className="title"/>
  );
};
