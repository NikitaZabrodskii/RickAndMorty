import { Button } from "@mui/material";
import { IApplyButtonProps } from "../../../interfaces/interfaces";

export  function ApplyButton(props:IApplyButtonProps) {
  const {applyFilters} = props;
  
  return (
    <div style={{marginBottom:'3rem'}}>
      <Button variant="contained"  style={{maxWidth: '150px', maxHeight: '60px', minWidth: '150px', minHeight: '60px',fontSize:'18px'}} onClick={applyFilters}>Apply Filters</Button>
    </div>
  );
}
