export interface IitemsData {
  created?: string;
  episode?: string[];
  gender: string;
  id: number;
  image: string;
  location?: { name: string; url: string };
  name: string;
  origin?: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url?: string;
}

export interface ICardPageProps{
    items:IitemsData[];
    loading:boolean;
}
export interface ICardProps extends IitemsData{
key:number;
}



export interface IselectetItem {
  category: string;
  options?: string[];

  type:string;
}

export interface IPropsSelectedItem {
  values: IselectetItem[];
  onChange:(name:string,value:string)=>void
} 


export interface IAllFiltersState{
  [key:string]:string;
  name:string;
  status:string;
  species:string;
  type:string;
  gender:string;

}

export interface IApplyButtonProps{
  applyFilters:()=>void
}