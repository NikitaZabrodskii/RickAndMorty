import React, { useState } from "react";
import './Cardstyles.scss';



import { ICardProps } from "../../../interfaces/interfaces";
import backgroundImg from "../../../img/37541.jpg";
import {CharacterDetailsModal} from "../CharacterDetails";

export const Card: React.FC<ICardProps> = ({
  name,
  type,
  species,
  id,
  gender,
  status,
  image,
}: ICardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  return (
    <div className="card">
      <div className="card__side card__side--front">
        <img src={image} alt="img" className="img" />
        <div className="inform">
          <p className="inform__name">{name}</p>
          <p className="inform__gender">gender: {gender}</p>
          <p className="inform__status">
            status:{" "}
            <span style={{ color: status === "Alive" ? "green" : "red" }}>
              {status}{" "}
            </span>{" "}
          </p>
          <p className="inform__type">{type === "" ? "" : `type: ${type}`}</p>
        </div>
      </div>
      ;
      <div className="card__side card__side--back">
        <div className="background-image">
          <img src={backgroundImg} alt="" height={460} width={300} />
        </div>
        <div className="button" onClick={openModal}>
          Read Details!
        </div>
      </div>
      ;
      <CharacterDetailsModal
        characterId={id}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </div>
  );
};
