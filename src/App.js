import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navmenu from 'layouts/Navmenu';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import { AuthenticatedTemplate } from '@azure/msal-react';


function App() {
   return (
       <Routes>
       <Route path="/" element={<Navmenu />} >
       <Route exact path='/'   element={<Home />} > </Route>
       <Route path='/home'  element={<Home />} />

       <Route path='/About' element={<About />} />

       </Route>
       </Routes>
  );
}

export default App;
