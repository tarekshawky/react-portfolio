import './App.css';
import { BrowserRouter, Route, Link, Router, Routes, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound />}/>

        </Routes> 
      </div>
    </BrowserRouter>
   
  );
}

export default App;
