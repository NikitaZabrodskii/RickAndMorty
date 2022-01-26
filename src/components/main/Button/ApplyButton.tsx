import { Button } from "@mui/material";

export default function ApplyButton(props:any) {
  const {applyFilters} = props;
  return (
    <div style={{marginBottom:'3rem'}}>
      <Button variant="contained"  style={{maxWidth: '150px', maxHeight: '60px', minWidth: '150px', minHeight: '60px',fontSize:'18px'}} onClick={applyFilters}>Apply Filters</Button>
    </div>
  );
}
