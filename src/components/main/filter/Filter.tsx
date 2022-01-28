import React from "react";
import { IFilterProps, IValues } from "../../../interfaces/interfaces";
import { SelectItem } from "./SelectItem";

export function Filter(props: IFilterProps) {
  const { onChange } = props;

  const values:IValues[] = [
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
      <SelectItem values={values} onChange={onChange} />
    </div>
  );
}
