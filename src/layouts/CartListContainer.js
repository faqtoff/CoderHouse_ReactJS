import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CartList from '../components/CartList'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartListContainer = () => {
  const { cart, totalAmount, removeItem, clear, sendOrder} = useContext(CartContext)
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

  const handleSend = () => {
    sendOrder().then(({id}) => {
      toast.success(`Gracias por tu compra! ID: ${id}`)
    })
    clear()
    setTotal(0)
  }
  return (
    <div className='conteiner'>
      <h2>Carrito</h2>
      <CartList cart={cart} remove={removeItem}/>
      {
        total > 0 &&
        <>
          <h4 className='text-end'>Total <span className='text--dolar'>{totalAmount}</span></h4>
          <div className="grid grid--med--2 grid--larg--2 grid--xl--2">
            <button className='boton--e bg--primary e--1--success'  onClick={handleSend}>
              <span>Finalizar Compra</span>
            </button>
            <button className='boton--e bg--primary e--1--red'  onClick={() => clear()}>
              <span>Vaciar Carrito</span>
            </button>
          </div>
        </>
      }
    </div>
  )
}

export default CartListContainer