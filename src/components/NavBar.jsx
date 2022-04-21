import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

export const NavBar = () => {
  const [show, setShow] = useState('')
  return (
    <nav className="navbar--faqstyle bg--primary">
        <label className='navbar__brand'>
            <NavLink className="navbar__link" rel="folow" to="/">Tienda</NavLink>
        </label>
        <ul className={`navbar__linkGroup ${show}`}>
            <li>
                <NavLink className="navbar__link" to='/'>Inicio</NavLink>
            </li>
            <li>
                <NavLink className="navbar__link" rel="folow" to='/category/utiles'>Utiles</NavLink>
            </li>
            <li>
                <NavLink className="navbar__link" rel="folow" to='/category/tecnologia'>Tecnologia</NavLink>
            </li>
            <li>
                <CartWidget />
            </li>
        </ul>
        <span className='navbar__btn' onClick={() => show===''?setShow('show'):setShow('')}>
            <i className="fas fa-bars"></i>
        </span>
    </nav>
  )
}
