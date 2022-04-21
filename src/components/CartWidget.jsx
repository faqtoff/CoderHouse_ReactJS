import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cartImg from '../assets/cart.svg'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const {quantiti} = useContext(CartContext)
  const [quantitiSelected, setQuantitiSelected] = useState(quantiti)

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      setQuantitiSelected(quantiti)
    }
  
    return () => {
      isMounted = false
    }
  }, [quantiti])
  
  return (
    <NavLink className="navbar__link" rel="folow" to='/cart'>
      <span className='d--flex'>
        <img className='me--1' src={cartImg} alt="cart" style={{'height': '1.8rem'}}/> 
        { quantitiSelected>0 && quantitiSelected }
      </span>
    </NavLink>
  )
}

export default CartWidget