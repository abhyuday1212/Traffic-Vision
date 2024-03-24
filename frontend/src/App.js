import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Navbar from './components/navbar/Navbar'
import GetStarted from "./components/getStarted/GetStarted"
import Contact from './components/contact/Contact'
import Login from './components/login/Login'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App