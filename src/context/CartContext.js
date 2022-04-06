import { addDoc, collection } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { db } from '../utils/firebase';

export const CartContext = createContext();

const CartProvider = ({children, initialState}) => {
    const [cart, setCart] = useState(initialState ? initialState.cart : [])
    const [totalAmount, setTotalAmount] = useState(initialState ? initialState.totalAmount : 0)
    const [quantiti, setQuantiti] = useState(initialState? initialState.quantiti : 0)

    
    const sendOrder = async () => {
        const ordersCollection = collection(db, 'orders')
        const order = {
            buyer:{},
            items: cart,
            total: totalAmount
        }

        return await addDoc(ordersCollection, order)
    }
    const reloadQuantiti = () => {
        let actualQuantiti = 0
        cart.forEach(item => actualQuantiti += item.quantiti)
        setQuantiti(actualQuantiti)
    }
    const reloadTotal = () => {
        let actualTotal = 0
        cart.forEach(item => actualTotal += (item.quantiti*item.precio))
        setTotalAmount(actualTotal)
    }
    const isInCart = (id) => {
        const exist = cart.filter(product => product.id === id)
        return exist.length === 1 ? true : false
    }
    const isInCartQuantiti = (id) => {
        const exist = cart.filter(product => product.id === id)
        return exist.length === 1 ? exist[0].quantiti : 0
    }

    const addItem = (item, quantiti) => {
        const current = cart
        if (!isInCart(item.id)){
            current.push({...item, quantiti})

            setCart(current)

            reloadQuantiti()
            reloadTotal()
        }
        else {
            const index = current.indexOf(item)
            current.splice(index)

            current.push({...item, quantiti})

            setCart(current)

            reloadQuantiti()
            reloadTotal()
        }
    }

    const removeItem = (id) => {
        if (isInCart(id)){
            const current = cart
            const item = cart.filter(product => product.id === id)[0]
            const index = current.indexOf(item)
            current.splice(index)
            setCart(current)
            reloadTotal()
            reloadQuantiti()
        }
    }

    const clear = () => {
        setCart([])
        reloadTotal()
        reloadQuantiti()
    }

    

    const contextValue = {
        cart,
        quantiti,
        totalAmount,
        sendOrder,
        addItem,
        removeItem,
        clear,
        isInCart,
        isInCartQuantiti
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider