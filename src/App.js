import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './FrontEnd/Header';
import Home from './FrontEnd/Home';
import Projets from './FrontEnd/Projets';
import FAQ from './FrontEnd/FAQ';
import Contact from './FrontEnd/Contact';
import Footer from './FrontEnd/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/projets" element={<Projets/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/me-contacter" element={<Contact/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
