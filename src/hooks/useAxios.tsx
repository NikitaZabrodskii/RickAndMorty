import axios from "axios";
import { IAllFiltersState, IitemsData } from "../interfaces/interfaces";
import { baseApiUrl } from '../utils/api'
import { useState, useEffect } from "react";

export function useAxios(setItems: any) {
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
  }, [currentPage]);

  function changeFilters(name: string, value: string): void {
    setAllFilters((prev) => ({ ...prev, [name]: value }));
  }

  function changePage(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }

  function getUrlToFetch() {
    const searchParams = new URLSearchParams();

    if (currentPage) searchParams.set("page", currentPage.toString());
    if (allFilters.name) searchParams.set("name", allFilters.name);
    if (allFilters.status) searchParams.set("status", allFilters.status);
    if (allFilters.species) searchParams.set("species", allFilters.species);
    if (allFilters.type) searchParams.set("type", allFilters.type);
    if (allFilters.gender) searchParams.set("gender", allFilters.gender);

    const urlToFetch = baseApiUrl + "?" + searchParams.toString();
    return urlToFetch;
  }

  async function fetchItems() {
    const urlToFetch = getUrlToFetch();

    try {
      setLoading(true);
      const itemsData = await axios.get(urlToFetch);
      setItems(itemsData.data.results);
      setPageCount(itemsData.data.info.pages);

      setLoading(true);
    } catch (e) {
      setError(true);
    }
  }

  return {
    isLoading,
    error,
    pageCount,
    changeFilters,
    fetchItems,
    changePage,
    currentPage,
  };
}
