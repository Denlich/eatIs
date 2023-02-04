import React from 'react';
import './SearchResult.css';
import ResultCard from '../ResultCard.js/ResultCard';
import { tempData } from '../../pages/Search/tempData';

export default function SearchResult() {
  return (
    <div className='grid'>
      {
        tempData.map(meal => (
          <ResultCard 
            title={meal.strMeal}
            img={meal.strMealThumb} 
          />
        ))
      }
    </div>
  )
}
