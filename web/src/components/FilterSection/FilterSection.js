import React from 'react';
import './FilterSection.css';

export default function FilterSection() {
  return (
    <div className='mv-24 row'>
      <h1>Show: </h1>
      <div className='mh-24'>
        <button className='button'>All</button>
      </div>
      <button className='button'>I have ingredients for</button>
    </div>
  )
}
