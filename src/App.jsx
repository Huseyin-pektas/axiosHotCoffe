import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/product-detail'element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
