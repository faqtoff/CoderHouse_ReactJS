import React from 'react'

const CartList = ({cart}) => {
    return cart.map(product => {
        const id = product.id
        const title = product.nombre
        const quantiti = product.quantiti
        const price = product.precio
        return (
        <div key={id}>
            <h3>{title}</h3>
            <p>{quantiti} x {price}</p>
            <p>{quantiti*price}</p>
        </div>
        )
    })
}

export default CartList