
import { FC } from "react";

import {Video} from "../main/Video";
import { Title } from "./Title";

export const Header: FC = () => {
  return (
    <div className="header">
      <Title />
      <Video/>
    </div>
  );
};
