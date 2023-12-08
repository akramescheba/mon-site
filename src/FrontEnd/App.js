import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Projets from './Projets'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/projets" element=<Projets /> />
          <Route path="/faq" element=<FAQ /> />
          <Route path="/me-contacter" element=<Contact /> />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
