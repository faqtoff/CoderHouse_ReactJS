import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const handelClick = (option) => {
        if (option === 'add') {
            count < stock 
                ? setCount(count + 1)
                : alert('No hay suficiente stock')
        }
        else if (option === 'quit') {
            count > 0 
                ? setCount(count - 1)
                : alert('No hay items seleccionados')
        }
    }
  return (
    <div className="conteiner">
        <div className="card grid--3">
            <button className='boton--e bg--primary' onClick={() => handelClick('add')}>Agregar</button>
            <p className='text-center'>{count}</p>
            <button className='boton--e bg--primary' onClick={() => handelClick('quit')}>Quitar</button>
        </div>
        <button className='boton--e bg--primary' onClick={onAdd}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount