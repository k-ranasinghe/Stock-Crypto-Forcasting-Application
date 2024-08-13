import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Forecast from './pages/Stocks/Stocks'
import Forecast1 from './pages/crypto/crypto'
import Home from './pages/Home/Home'

const App = () => {
  


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Forecast />} />
        <Route path="/crypto" element={<Forecast1 />} />
        
      </Routes>
    </div>
  )
}

export default App
