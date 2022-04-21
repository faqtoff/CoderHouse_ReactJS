import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CartList from '../components/CartList'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyerForm from '../components/BuyerForm';

const CartListContainer = () => {
  const { cart, totalAmount, removeItem, clear, sendOrder, setBuyer} = useContext(CartContext)
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
        <h2>Datos del comprador</h2>
        <BuyerForm handleSend={handleSend} totalAmount={totalAmount} clear={clear} setBuyer={setBuyer}/>
        </>
      }
    </div>
  )
}

export default CartListContainer