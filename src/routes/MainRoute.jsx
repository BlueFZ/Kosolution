import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Homepage from '../pages/Homepage'
import Navbar from '../components/Navbar'

function MainRoute() {
	return (
		<Routes>
			<Route path='/' element={<Register />} />
			<Route path='/login' element= {<Login />} />
			<Route path='/home' element= {<Homepage />} />
			<Route path='/nav' element= {<Navbar />} />
		</Routes>
	)
}

export default MainRoute