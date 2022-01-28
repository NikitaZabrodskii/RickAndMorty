import React, { FC } from "react";
import { useEffect, useState } from "react";
import Video from "./Video/Video";
import { Card } from "./card/Card";
import axios from "axios";
import { IitemsData } from "../../interfaces/interfaces";
import { CardsPage } from "./card/CardsPage";
import { Pagination } from "@mui/material";
import Filter from "./filter/Filter";

import ApplyButton from "./Button/ApplyButton";

import { useAxios } from "../CastomHooks/useAxios";

import NotFound from "../NotFound";

export const Main: FC = () => {
  const [items, setItems] = useState<IitemsData[]>([]);
  const {
    isLoading,
    pageCount,
    error,
    changeFilters,
    applyAllFilters,
    changePage,
    currentPage,
  } = useAxios(setItems);
  


  function changeCurrentPage(event: React.ChangeEvent<unknown>, value: number) {
    changePage(event, value);
  }
  function applyFilters() {
    applyAllFilters();
  }


  function onChange(name: string, value: string) {
    changeFilters(name, value);
  }

  return (
    <div>
  
        <main className="main">
          <Filter onChange={onChange} />
          <ApplyButton applyFilters={applyFilters} />

          <CardsPage items={items} loading={isLoading} />
          <div style={{ marginTop: "7rem" }}>
            <Pagination
              count={42}
              page={currentPage}
              onChange={changeCurrentPage}
              size="large"
            />
          </div>
        </main>
    
    </div>
  );
};
