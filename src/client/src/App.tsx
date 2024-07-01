import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ResetPage from './Pages/ResetPage'

import './App.css'

function App() {

	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>

			<Route path="/login" element={<LoginPage />} />

			<Route path="/register" element={<RegisterPage />} />

			<Route path="/reset" element={<ResetPage />} />
		</Routes>
	)
}

export default App
