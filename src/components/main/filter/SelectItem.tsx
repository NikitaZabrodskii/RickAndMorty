import "./Select.scss";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { IPropsSelectedItem } from "../../../interfaces/interfaces";

export  function SelectItem({ values, onChange }: IPropsSelectedItem) {
  function changeFilters(e: any) {
    onChange(e.target.name, e.target.value);
  }

  return (
    <div className="selectItem">
      {values.map((val) =>
        val.type === "select" ? (
          <FormControl fullWidth style={{ width: "150px" }} key={val.category}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ fontSize: "18px" }}
              
            >
              {val.category}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={val.category}
              style={{ fontSize: "20px", outlineWidth: "3px" }}
              name={val.category}
              onChange={changeFilters}
            >
              {val.options
                ? val.options.map((opt) => (
                    <MenuItem
                      value={opt}
                      style={{ fontSize: "20px" }}
                      key={opt}
                    >
                      {opt}
                    </MenuItem>
                  ))
                : ""}
            </Select>
          </FormControl>
        ) : (
          <TextField
            id="outlined-basic"
            label={val.category}
            name={val.category}
            variant="outlined"
            onChange={changeFilters}
            InputLabelProps={{ style: { fontSize: 18 } }}
            InputProps={{ style: { fontSize: 20, width: 150 } }}
          />
        )
      )}
    </div>
  );
}
