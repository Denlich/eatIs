import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchInput/SearchInput';
import './Navbar.css';

export default function Navbar() {
  return (
    <navbar className="navbar container row">
      <h1>Eat is</h1>
      <Search />
      <Link to={"/profile"}><p>profile</p></Link>
    </navbar>
  )
}
