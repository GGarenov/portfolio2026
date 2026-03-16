import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/skills' element={<Skills/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}
