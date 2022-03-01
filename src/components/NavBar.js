import React, { useState } from 'react'
import CartWidget from './CartWidget'

export const NavBar = () => {
  const [show, setShow] = useState('')
  return (
    <nav className="navbar--faqstyle bg--primary">
        <label className='navbar__brand'>
            <a className="navbar__link" rel="folow" href="/">Tienda</a>
        </label>
        <ul className={`navbar__linkGroup ${show}`}>
            <li>
                <a className="navbar__link" rel="folow" href='/qr-code'>Inicio</a>
            </li>
            <li>
                <a className="navbar__link" rel="folow" href='/tienda'>Productos</a>
            </li>
            <li>
                <a className="navbar__link" rel="folow" href='/contacto'>Contacto</a>
            </li>
            <li><i className="fa-solid fa-cart-shopping color--white"></i>
                <CartWidget />
            </li>
        </ul>
        <span className='navbar__btn' onClick={() => show===''?setShow('show'):setShow('')}>
            <i className="fas fa-bars"></i>
        </span>
    </nav>
  )
}
