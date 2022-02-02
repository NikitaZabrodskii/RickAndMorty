import React from "react";
import './Cardstyles.scss'



import { ICardPageProps, } from "../../../interfaces/interfaces";
import { Card } from "./Card";

export const CardsPage: React.FC<ICardPageProps> = ({
  items,

}: ICardPageProps) => {
  return (
    <div className="main__grid">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          gender={item.gender}
          name={item.name}
          status={item.status}
          type={item.type}
          species={item.species}
          image={item.image}
        />
      ))}
    </div>
  );
};


