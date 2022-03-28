import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartList from './CartList'

const Cart = () => {
  const {cart, totalAmount} = useContext(CartContext)

  return (
    <div className='conteiner'>
      <h2>Carrito</h2>
      <CartList cart={cart}/>
      <h4>Total ${totalAmount}</h4>
    </div>
  )
}

export default Cart