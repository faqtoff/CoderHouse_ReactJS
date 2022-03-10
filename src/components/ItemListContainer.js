import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

import productosIniciales from '../mocks/productos.mock'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {category_id} = useParams()

  useEffect(() => {

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales)
      }, 2000)
    })

    pedido
    .then((resultado) => {
      category_id 
      ? setProductos(resultado.filter((item) => item.category_id === category_id))
      : setProductos(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })

  }, [category_id])
  
  if(loading) {
    return <h2>Cargando...</h2>
  }
  else {
    return <ItemList productos={productos} />
  }

}

export default ItemListContainer