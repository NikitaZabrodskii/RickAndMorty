import { Box, Dialog } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from  "./CharacterDetails.module.scss";
import { ICharacterDetailsModalProps } from "../../../interfaces/interfaces";
import { IitemsData } from "../../../interfaces/interfaces";
import { baseApiUrl } from "../../../utils/api";



export const CharacterDetailsModal: React.FC<ICharacterDetailsModalProps> = ({
  characterId,
  open,
  setOpen,
}) => {
  const [character, setCharacter] = useState<IitemsData | null>(null);

  async function loadCharacterData() {
    const res = await axios.get(baseApiUrl + "/" + characterId);
    const data: IitemsData = res.data;
    setCharacter(data);
  }

  useEffect(() => {
    const mainContainer = document.querySelector(".container");

    if (open) {
      loadCharacterData();

      if (mainContainer) {
        mainContainer.setAttribute("style", "filter: blur(2rem)");
      }
    } else {
      if (mainContainer) {
        mainContainer.removeAttribute("style");
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      PaperProps={{
        style: {
          borderRadius: "2rem",
        },
      }}
      BackdropProps={{
        style: {
          // filter: "blur(5rem)",
          backgroundColor: "transparent",
        },
      }}
    >
      <Box className={styles.characterModal}>
        {character ? (
          <>
            <h2 className={styles.title}>{character.name}</h2>
            <ul className={styles.descriptionList}>
              <li className={styles.descriptionItem}>
                <strong>Status:</strong> {character.status}
              </li>
              <li className={styles.descriptionItem}>
                <strong>Species:</strong> {character.species}
              </li>
              <li className={styles.descriptionItem}>
                <strong>Type:</strong> {character.type}
              </li>
              <li className={styles.descriptionItem}>
                <strong>Gender:</strong> {character.gender}
              </li>
              <li className={styles.descriptionItem}>
                <strong>Origin:</strong> {character.origin?.name}
              </li>
            </ul>
          </>
        ) : (
          <h2 className={styles.title}>Loading...</h2>
        )}
      </Box>
    </Dialog>
  );
};

export default CharacterDetailsModal;
