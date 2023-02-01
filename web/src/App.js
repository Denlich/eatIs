import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profie" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
