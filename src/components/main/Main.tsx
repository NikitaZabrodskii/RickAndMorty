import React, { FC } from "react";
import { useEffect, useState } from "react";
import Video from "./Video/Video";
import { Card } from "./card/Card";
import axios from "axios";
import { IitemsData } from "../../interfaces/interfaces";
import { CardsPage } from "./card/CardsPage";
import { Pagination } from "@mui/material";
import Filter from "./filter/Filter";
import Button from "./Button/ApplyButton";
import ApplyButton from "./Button/ApplyButton";
import { IAllFiltersState } from "../../interfaces/interfaces";
import { api } from "../utils/api";
import { actType, useAxios } from "../CastomHooks/useAxios";
import { act } from "react-dom/test-utils";
import NotFound from "../NotFound";

export const Main: FC = () => {
  const [allFilters, setAllFilters] = useState<IAllFiltersState>({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [type, setType] = useState<actType>(actType.SetPage);

  const { items, isLoading, pageCount, error } = useAxios(
    type,
    currentPage,
    allFilters
  );

  console.log(pageCount);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }
  function applyFilters() {
    setType(actType.ApplyFilters);
  }

  function onChange(name: string, value: string) {
    setAllFilters((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      {error ? (
        <NotFound />
      ) : (
        <main className="main">
          <Filter onChange={onChange} />
          <ApplyButton applyFilters={applyFilters} />

          <CardsPage items={items} loading={isLoading} />
          <div style={{ marginTop: "7rem" }}>
            <Pagination
              count={42}
              page={currentPage}
              onChange={handleChange}
              size="large"
            />
          </div>
        </main>
      )}
    </div>
  );
};
