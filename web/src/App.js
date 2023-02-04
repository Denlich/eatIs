import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './utils/auth';
import Login from './pages/Profile/Login';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
