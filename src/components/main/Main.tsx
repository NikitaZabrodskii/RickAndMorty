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

export const Main: FC = () => {
  const [items, setItems] = useState<IitemsData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [countItems, setCountItems] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [allFilters, setAllFilters] = useState<IAllFiltersState>({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });



  useEffect(() => {
    const apiWithCurrentPage =api +`/?page=${currentPage}`;
    // `https://rickandmortyapi.com/api/character
    const getItems = async () => {
      setLoading(true);
      const itemsData = await axios.get(apiWithCurrentPage);
      setItems(itemsData.data.results);
      setLoading(true);
    };
    getItems();
  }, [currentPage]);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }
  function applyFilters() {
    // `https://rickandmortyapi.com/api/character`
    const apiWithFilters = api+ `/?page=${currentPage}&name=${allFilters.name}&status=${allFilters.status}&species=${allFilters.species}&type=${allFilters.type}&gender=${allFilters.gender}`;

    const getItems = async () => {
      setLoading(true);
      const itemsData = await axios.get(apiWithFilters);
      setItems(itemsData.data.results);
      setLoading(true);
    };
    getItems();
  }

  function onChange(name: string, value: string) {
    setAllFilters((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main className="main">
      <Filter onChange={onChange} />
      <ApplyButton applyFilters={applyFilters} />

      <CardsPage items={items} loading={loading} />
      <div style={{ marginTop: "7rem" }}>
        <Pagination
          count={42}
          page={currentPage}
          onChange={handleChange}
          size="large"
        />
      </div>
    </main>
  );
};
