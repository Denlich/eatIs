import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { useAuth } from '../../utils/auth';
import './Profile.css';

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    auth.login(username);
    navigate('/profile', { replace: true });
  }

  return (
    <section className='container centre'>
      <Form 
        setUsername={setUsername} 
        setPassword={setPassword} 
        handle={handleLogin} 
      />
    </section>
  )
}
