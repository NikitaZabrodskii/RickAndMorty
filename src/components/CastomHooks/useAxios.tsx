import axios from "axios";
import { IAllFiltersState, IitemsData } from "../../interfaces/interfaces";
import { api } from "../utils/api";
import { useState, useEffect } from "react";

export enum actType {
  SetPage = "setPage",
  ApplyFilters = "applyFilters",
}

export function useAxios(
  type: actType = actType.SetPage,
  currentPage: number = 1,
  allFilters?: IAllFiltersState
) {
  const [items, setItems] = useState<IitemsData[]>([]);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [pageCount,setPageCount] = useState((0))
  const [error,setError] = useState<boolean>(false)

  useEffect(() => {
    changeVisual();
  }, [allFilters,currentPage,type]);

  function changeVisual() {
    
      if (type === actType.ApplyFilters && allFilters) {
        const apiWithFilters =
          api +
          `/?page=${currentPage}&name=${allFilters.name}&status=${allFilters.status}&species=${allFilters.species}&type=${allFilters.type}&gender=${allFilters.gender}`;

        const getItems = async () => {
            try{
                setLoading(true);
                const itemsData = await axios.get(apiWithFilters);
                setItems(itemsData.data.results);
                setPageCount(items.length)
                setLoading(true);
            }catch(e){
                setError(true)
            }
        
         
          
        };
        getItems();
      } else if (type === actType.SetPage) {
        const apiWithCurrentPage = api + `/?page=${currentPage}`;

        const getItems = async () => {
          setLoading(true);
          const itemsData = await axios.get(apiWithCurrentPage);
          setItems(itemsData.data.results);
          setPageCount(items.length)
          setLoading(true);
        };
        getItems();
      }
    
  }

  return {
    items,
    isLoading,
   error,
    pageCount
  };
}
