import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

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

      <Route
        path='/register'
        element={<RegisterPage/>}
      />
    </Routes>
  )
}

export default App
