import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import CartListContainer from '../layouts/CartListContainer';
import ItemDetailContainer from '../layouts/ItemDetailContainer';
import ItemListContainer from '../layouts/ItemListContainer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartListContainer />} />
          <Route path='/category/:category_id' element={<ItemListContainer />} />
          <Route path='/item/:item_id' element={<ItemDetailContainer />} />
        </Routes>
        <ToastContainer />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter