import React from 'react';
import './Form.css';

export default function Form({ setUsername, setPassword, handle }) {
  return (
    <form className='form'>
      <div className='inputContainer'>
        <label>Username: </label><br/>
        <input placeholder='Username' type="text" onChange={e => setUsername(e.target.value)} />
      </div>
      <div className='inputContainer'>
        <label>Password: </label><br/>
        <input placeholder='Password' type="password" onChange={e => setPassword(e.target.value)} />
      </div>
      <button className="button" onClick={handle}>Login</button>
    </form>
  )
}
