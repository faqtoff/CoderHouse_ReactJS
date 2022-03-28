import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <section className='conteiner--fluid grid--sm--1 grid--med--2 grid--larg--3 grid--xl--4'>
      {productos.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </section>
  )
}

export default ItemList