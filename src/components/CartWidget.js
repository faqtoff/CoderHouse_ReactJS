import React from 'react'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <a className="navbar__link" rel="folow" href='/carrito'>
      <img src={cart} alt="cart" style={{'height': '1.8rem'}}/>
    </a>
  )
}

export default CartWidget