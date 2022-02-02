import React, { useState } from "react";
import styles from './Card.module.scss';
import cx from 'classnames';



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
    <div className={styles.card}>
      <div className={cx(styles.side,styles.sideFront)}>
        <img src={image} alt="img" className={styles.cardImg} />
        <div className={styles.cardInform}>
          <p className={styles.informName}>{name}</p>
          <p className={styles.informGender}>gender: {gender}</p>
          <p >
            status:{" "}
            <span style={{ color: status === "Alive" ? "green" : "red" }}>
              {status}{" "}
            </span>{" "}
          </p>
          <p >{type === "" ? "" : `type: ${type}`}</p>
        </div>
      </div>
      ;
      <div className={cx(styles.side,styles.sideBack)}>
        <div className={styles.backgroundImage}>
          <img src={backgroundImg} alt="" height={460} width={300} />
        </div>
        <div className={styles.button} onClick={openModal}>
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
