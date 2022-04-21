import React from 'react'

const CartList = ({cart, remove}) => {
    if(cart.length > 0){
        return cart.map(product => {
            const id = product.id
            const title = product.nom
            const img = product.img
            const quantiti = product.quantiti
            const price = product.precio
            return (
            <div className='grid--5' key={id}>
                <img src={img} alt="item_img" />
                <h3>{title}</h3>
                <p>{quantiti} x ${price}</p>
                <p>${quantiti*price}</p>
                {
                    remove &&
                    <div className="conteiner">
                        <button className='boton--e bg--primary e--1--red' onClick={() => remove(id)}>
                            <span>Eliminar</span>
                        </button>
                    </div>
                }
            </div>
            )
        })
    }
    else{
        return (
            <div className='conteiner'>
                <p>No hay articulos seleccionados</p>
            </div>
        )
    }
}

export default CartList