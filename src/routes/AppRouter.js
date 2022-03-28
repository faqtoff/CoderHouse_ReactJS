import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import { NavBar } from "../components/NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
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