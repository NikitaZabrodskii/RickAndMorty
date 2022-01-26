import React from "react";
import { FC } from "react";
import Video from "../main/Video/Video";


import { Title } from "./Title/Title";

export const Header: FC = () => {
  return (
    <div className="header">
      <Title />
      <Video/>
     
 
    </div>
  );
};
