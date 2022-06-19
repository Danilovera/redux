import React from 'react'
import { BrowserRouter, Routes,Route, } from 'react-router-dom'
import AddProducts from '../components/AddProducts'
import Counter from '../components/Counter'
import Home from '../components/Home'
import NavBar from '../components/NabBar'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    < NavBar />
    <Routes>
      <Route path="/Counter" element={< Counter />} />
      <Route path="/" element={< Home />} />
      <Route path="/AddProducts" element={< AddProducts />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes