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
        <div className="grid--3">
            <button className='boton--e bg--primary e--1--success' onClick={() => handelClick('add')}>
                <span> + </span>
            </button>
            <p className='text-center'>{count}</p>
            <button className='boton--e bg--primary e--1--error' onClick={() => handelClick('quit')}>
                <span> - </span>    
            </button>
        </div>
        <button className='boton--e bg--primary e--1--terciary' onClick={onAdd}>
            <span> Agregar al Carrito </span>
        </button>
    </div>
  )
}

export default ItemCount