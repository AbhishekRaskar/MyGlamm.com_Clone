import React from 'react'
import { Route, Routes } from "react-router-dom";
import Register from '../Pages/Register';
import SingleProduct from '../Pages/SingleProduct';
import Featured from '../Pages/Featured';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Sale from '../Pages/Sale';



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/products' element={<Products />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/sale' element={<Sale />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
