import React from 'react'
import { useNavigate } from 'react-router-dom';
import Fridge from '../../components/Fridge/Fridge';
import { useAuth } from '../../utils/auth';

export default function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/')
  }
  
  return (
    <section className='container'>
      <header className='row mv-24'>
        <h1>Welcome, {auth.user}</h1>
        <button className="button" onClick={handleLogout}>Logout</button>
      </header>
      <Fridge />
    </section>
  )
}
