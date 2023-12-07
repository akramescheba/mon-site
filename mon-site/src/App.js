
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Frontend/js/Header';
import HomePage from './Frontend/js/HomePage';
import './App.css';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
