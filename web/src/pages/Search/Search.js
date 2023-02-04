import React, {useState} from 'react';
import FilterSection from '../../components/FilterSection/FilterSection';
import SearchResult from '../../components/SearchResult/SearchResult';
import './Search.css';

export default function Search() {
  return (
    <section className='container'>
      <FilterSection />
      <SearchResult />
    </section>
  )
}
