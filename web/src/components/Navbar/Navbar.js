import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import Search from '../SearchInput/SearchInput';
import './Navbar.css';

export default function Navbar() {
  const auth = useAuth();

  return (
    <nav className="nav container row">
      <Link to="/"><h1>Eat is</h1></Link>
      <Search />
      <Link to="/profile"><p>profile</p></Link>
    </nav>
  )
}
