import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const {addItem, isInCartQuantiti, isInCart} = useContext(CartContext)
  const [added, setAdded] = useState(isInCart(item?.id))
  const add = (cant) => {
    setAdded(true)
    addItem(item, cant)
  }

  
  useEffect(() => {
    let isMounted = true
    if (isMounted && item?.id){
      setAdded(isInCart(item?.id))
    }
    return () => {
      isMounted = false
    }
  }, [item, isInCart])

  return (
    <div className='conteiner grid grid--med--2 grid--larg--2 grid--xl--2 mt--2 mb--2'>
      <img src={item?.img} alt={`ìmagen_producto`} style={{'maxWidth':'25rem'}}/>
      <div className="card" style={{'minWidth':'30rem'}}>
        <h2>{item?.nombre}</h2>
        <p>{item?.detail}</p>
        <p>${item?.precio}</p>
        { !added 
          ? <ItemCount initial={isInCartQuantiti(item?.id)} stock={item?.cantidad} onAdd={add} /> 
          : <p onClick={() => setAdded(false)}>{isInCartQuantiti(item?.id)} seleccionados</p>
        }
        <div className="conteiner">
          <button className='boton--e bg--primary e--1--success'>
            <span>Finalizar la compra</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail