import React from 'react';
import { FC } from 'react';
import { ICardPageProps, IitemsData } from '../../../interfaces/interfaces';
import './card.scss';
import { Card } from './Card';
import { Skeleton } from './Skeleton'

export const CardsPage:React.FC<ICardPageProps> = ({items,loading}:ICardPageProps) => {
  
  return (<div className="main__grid">
    {loading?items.map(item=> <Card key={item.id} id={item.id} gender={item.gender} name={item.name} status={item.status} type={item.type} species={item.species} image={item.image}/>)
    
  :
  <Skeleton/>
  }
      
  

     
  </div>)
};
