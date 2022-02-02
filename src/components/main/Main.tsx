import React, { FC, useState } from "react";
import { Pagination } from "@mui/material";

import { IitemsData } from "../../interfaces/interfaces";
import { CardsPage } from "./Сard";
import { Filter } from './Filter'
import { ApplyButton } from "./Button";
import { useAxios } from "../../hooks/useAxios";
import { NotFound } from "./NotFound";

export const Main: FC = () => {
  const [items, setItems] = useState<IitemsData[]>([]);
  const {
    isLoading,
    pageCount,
    error,
    changeFilters,
    getItems,
    changePage,
    currentPage,
  } = useAxios(setItems);

  function changeCurrentPage(event: React.ChangeEvent<unknown>, value: number) {
    changePage(event, value);
  }

  function applyFilters() {
    getItems();
  }

  function onChange(name: string, value: string) {
    changeFilters(name, value);
  }

  return (
    <main className="main">
      <Filter onChange={onChange} />
      <ApplyButton applyFilters={applyFilters} />


      {error?<NotFound/> : <CardsPage items={items} /> }
    

     
      <div className="pagination">
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={changeCurrentPage}
          size="large"
        />
      </div>
    </main>
  );
};
