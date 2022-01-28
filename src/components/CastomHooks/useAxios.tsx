import axios from "axios";
import { IAllFiltersState, IitemsData } from "../../interfaces/interfaces";
import { api } from "../utils/api";
import { useState, useEffect } from "react";

export function useAxios(setItems:any) {


  const [isLoading, setLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState<boolean>(false);
  const [allFilters, setAllFilters] = useState<IAllFiltersState>({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
 

  useEffect(() => {
    fetchItems();
  }, []);




  function changeFilters(name: string, value: string): void {
    setAllFilters((prev) => ({ ...prev, [name]: value }));
  }

  function changePage(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }

  async function applyAllFilters() {
    const apiWithFilters =
      api +
      `/?page=${currentPage}&name=${allFilters.name}&status=${allFilters.status}&species=${allFilters.status}&type=${allFilters.type}&gender=${allFilters.gender}`;
    try {
      setLoading(true);
      const itemsData = await axios.get(apiWithFilters);
      setItems(itemsData.data.results);
  
      setLoading(true);
      console.log(apiWithFilters);
    } catch (e) {
      setError(true);
    }
  }

  async function fetchItems() {
    const apiWithCurrentPage = api + `/?page=${currentPage}`;

    setLoading(true);
    const itemsData = await axios.get(apiWithCurrentPage);
    setItems(itemsData.data.results);
  
    setLoading(true);
  }

  return {
  
    isLoading,
    error,
    pageCount,
    changeFilters,
    applyAllFilters,
    changePage,
    currentPage,
  };
}
