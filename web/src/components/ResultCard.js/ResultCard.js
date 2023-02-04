import React from 'react';
import './ResultCard.css';

export default function ResultCard({ children, img, title }) {
  return (
    <div className='card'>
      <div className='imgContainer'>
        <img 
          src={img} 
          width={'100%'}
          height={'100%'}
        />
      </div>
      <p className='mv-12'>{ title }</p>
      <div>
        {children}
      </div>
    </div>
  )
}
