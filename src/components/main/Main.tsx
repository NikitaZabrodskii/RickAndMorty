import React, { FC, useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import axios from "axios";




import { IitemsData } from "../../interfaces/interfaces";
import { CardsPage } from "./card/CardsPage";
import {Filter} from "./filter/Filter";
import {ApplyButton} from "./Button/ApplyButton";
import { useAxios } from "../../hooks/useAxios";
import NotFound from "../NotFound";









export const Main: FC = () => {
  const [items, setItems] = useState<IitemsData[]>([]);
  const {
    isLoading,
    pageCount,
    error,
    changeFilters,
    fetchItems,
    changePage,
    currentPage,
  } = useAxios(setItems);

  function changeCurrentPage(event: React.ChangeEvent<unknown>, value: number) {
    changePage(event, value);
  }

  function applyFilters() {
    fetchItems();
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
            count={pageCount}
            page={currentPage}
            onChange={changeCurrentPage}
            size="large"
          />
        </div>
      </main>
    </div>
  );
};
