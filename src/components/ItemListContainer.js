import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  const add = () => {
    alert('Add')
  }
  return (
    <>
      {greeting}
      <ItemCount stock={5} initial={1} onAdd={add}/>
    </>
  )
}

export default ItemListContainer