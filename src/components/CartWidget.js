import React from 'react'
import { NavLink } from 'react-router-dom'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <NavLink className="navbar__link" rel="folow" to='/cart'>
      <img src={cart} alt="cart" style={{'height': '1.8rem'}}/>
    </NavLink>
  )
}

export default CartWidget