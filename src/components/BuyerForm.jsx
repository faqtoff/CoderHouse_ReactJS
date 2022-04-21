import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BuyerForm = ({setBuyer, handleSend, clear}) => {
    const [newBuyer, setNewBuyer] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })


    const handleSubmit = async e => {
        e.preventDefault()
        if ( 
            newBuyer.nombre.length > 0 
        ){
            await setBuyer(newBuyer)
            handleSend()
        }
        else{
            toast.error(`Debe completar todos los datos del comprador`)
        }
    }

    const handleChange = e => {
        setNewBuyer(
            {
                ...newBuyer,
                [e.target.name]: e.target.value
            }
        )
    }

  return (
    <form className='form'>
        <div className="form__grupo mb--1">
            <label htmlFor="nombre" className="form__label">Nombre</label>
            <input type="text" className="form__grupo__input" id="nombre" name='nombre' value={newBuyer.nombre} onChange={handleChange} required/>
        </div>
        <div className="form__grupo mb--1">
            <label htmlFor="telefono" className="form__label">Telefono</label>
            <input type="phone" className="form__grupo__input" id="telefono" name='telefono' value={newBuyer.telefono} onChange={handleChange} required/>
        </div>
        <div className="form__grupo mb--1">
            <label htmlFor="email" className="form__label">Email</label>
            <input type="email" className="form__grupo__input" id="email" name='email' value={newBuyer.email} onChange={handleChange} required/>
        </div>
        {
            <div className='col--span--2'>
                <div className="grid grid--med--2 grid--larg--2 grid--xl--2">
                    <button className='boton--e bg--primary e--1--success'  onClick={handleSubmit}>
                    <span>Finalizar Compra</span>
                    </button>
                    <button className='boton--e bg--primary e--1--red'  onClick={() => clear()}>
                    <span>Vaciar Carrito</span>
                    </button>
                </div>
            </div>
        }
    </form>
  )
}

export default BuyerForm