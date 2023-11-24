import { Route, Routes } from 'react-router-dom';
import './App.css';
import PFHome from './Pages/PFHome';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { useContext } from 'react';
import { tokenAuthContext } from './Context/TokenAuth';

function App() {
  const {isAuthenticate,setIsAuthenticate} = useContext(tokenAuthContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<PFHome/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/dashboard' element={ isAuthenticate? <Dashboard/> :<PFHome/> } />
        <Route path='/projects' element={isAuthenticate?<Projects/>:<PFHome/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
