import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Leaderboard from './pages/Leaderboard'

function App (): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </Router>
  )
}

export default App
