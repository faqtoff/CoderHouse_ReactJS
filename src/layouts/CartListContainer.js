import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CartList from '../components/CartList'

const CartListContainer = () => {
  const { cart, totalAmount, removeItem, clear} = useContext(CartContext)
  const [total, setTotal] = useState(totalAmount)
  
  useEffect(() => {
    let isMounted = true
    if(isMounted){
      setTotal(totalAmount)
    }
  
    return () => {
      isMounted = false
    }
  }, [totalAmount])
  return (
    <div className='conteiner'>
      <h2>Carrito</h2>
      <CartList cart={cart} remove={removeItem}/>
      {
        total > 0 &&
        <>
          <h4 className='text-end'>Total <span className='text--dolar'>{totalAmount}</span></h4>
          <p className='text-end cursor--pointer' onClick={() => clear()}>Vaciar Carrito</p>
        </>
      }

    </div>
  )
}

export default CartListContainer