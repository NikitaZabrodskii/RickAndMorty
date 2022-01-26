import { useState } from "react";
import { FC } from "react";
import SelectItem from "./SelectItem";


export default function Filter(props:any) {
const {onChange} = props;
 

  const values = [
    { category: "name", type: "input" },
    {
      category: "status",
      options: ["alive", "dead", "unknown"],

      type: "select",
    },
    { category: "species", type: "input" },
    { category: "type", type: "input" },
    {
      category: "gender",
      options: ["female", "male", "genderless", "unknown"],

      type: "select",
    },
  ];


  
 



  return (
    <div className="filter">
      <SelectItem values={values} onChange={onChange}/>
    </div>
  );
}
