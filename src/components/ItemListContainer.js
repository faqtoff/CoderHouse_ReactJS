import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

let productosIniciales = [
  {
    id: 1,
    nombre: 'Cartuchera',
    precio: 2500,
    cantidad: 5,
    img: 'https://us.123rf.com/450wm/nanastudio/nanastudio2001/nanastudio200100821/138724063-l%C3%A1piz-para-el-examen-hoja-de-respuestas-de-la-prueba-escolar-impresa.jpg?ver=6'
  },
  {
    id: 2,
    nombre: 'Mochila',
    precio: 3000,
    cantidad: 4,
    img: 'https://us.123rf.com/450wm/nanastudio/nanastudio2001/nanastudio200100821/138724063-l%C3%A1piz-para-el-examen-hoja-de-respuestas-de-la-prueba-escolar-impresa.jpg?ver=6'
  }
]

const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales)
      }, 2000)
    })
    pedido
    .then((resultado) => {
      setProductos(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])
  
  if(loading) {
    return <h2>Cargando...</h2>
  }
  else {
    return <ItemList productos={productos} />
  }

}

export default ItemListContainer