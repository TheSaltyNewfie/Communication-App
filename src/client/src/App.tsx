import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

import './App.css'

function App() {

  return (
    <Routes>
      <Route 
        path='/'
        element={<HomePage/>}
      />

      <Route
        path='/login'
        element={<LoginPage/>}
      />
    </Routes>
  )
}

export default App
