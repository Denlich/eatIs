import React from 'react';
import Amount from '../ResultCard.js/Amount/Amount';
import ResultCard from '../ResultCard.js/ResultCard';
import { tempData } from '../../pages/Search/tempData';

export default function Fridge() {
  return (
    <div className='grid'>
      {
        tempData.map(meal => (
          <ResultCard 
            title={meal.strMeal}
            img={meal.strMealThumb}
            children={<Amount />} 
          />
        ))
      }
    </div>
  )
}
