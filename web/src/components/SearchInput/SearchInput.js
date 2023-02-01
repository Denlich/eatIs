import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.css'

export default function Search() {
  return (
    <div class="searchContainer">
      <form action="">
        <input type="text" placeholder="Search for a meal" />
        <FontAwesomeIcon icon={faMagnifyingGlass} size={24} color={'#aaa'} />
      </form>
    </div>
  )
}
