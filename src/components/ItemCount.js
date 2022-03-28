import React, { useState } from 'react'  
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const handelClick = (option) => {
        if (option === 'add') {
            count < stock 
                ? setCount(count + 1)
                : toast.error('No hay suficiente stock')
        }
        else if (option === 'quit') {
            count > 0 
                ? setCount(count - 1)
                : toast.error('No hay items seleccionados')
        }
    }

    const onAddHandler = () => {
        onAdd && onAdd(count)
    }
    
  return (
    <>
        <div className="grid--3">
            <button className='boton--e bg--primary e--1--error' onClick={() => handelClick('quit')}>
                <span> - </span>    
            </button>
            <p className='text-center'>{count}</p>
            <button className='boton--e bg--primary e--1--success' onClick={() => handelClick('add')}>
                <span> + </span>
            </button>
        </div>
        {
            count > 0 &&
            <button className='boton--e bg--primary e--1--terciary' onClick={onAddHandler}>
                <span> Agregar al Carrito </span>
            </button>
        }
    </>
  )
}

export default ItemCount