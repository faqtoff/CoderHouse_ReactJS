import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

const Item = ({ item }) => {
  const {addItem, isInCartQuantiti, isInCart} = useContext(CartContext)
  const [added, setAdded] = useState(false)
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
    <div className="card mt--1">
      <Link className='color--primary text-decoration--none' to={`/item/${item.id}`}>
        <img src={item.img} alt={`ìmagen_producto`} />
        <h2>{item.nombre}</h2>
        <p>${item.precio}</p>
      </Link>
      
      { !added
        ? <ItemCount initial={isInCartQuantiti(item?.id)} stock={item?.cantidad} onAdd={add} /> 
        : <p onClick={() => setAdded(false)}>{isInCartQuantiti(item?.id)} seleccionados</p>
      }
    </div>
  )
}

export default Item