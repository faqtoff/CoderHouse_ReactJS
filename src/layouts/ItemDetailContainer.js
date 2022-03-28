import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebase';

const ItemDetailContainer = () => {
  const {item_id} = useParams()
  const [item, setItem] = useState()
  const [loading, setLoading] = useState()

  const read = async(docRef) =>{
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setItem(docSnap.data())
      setLoading(false)
    } else {
      console.log("No such document!")
    }
  }

  useEffect(() => {
    const docRef = doc(db, "stock", `${item_id}`);
    read(docRef)
  }, [item_id])
  
  if(loading) {
    return <h2>Cargando...</h2>
  }
  else{
    return <ItemDetail item={item}/>
  }
}

export default ItemDetailContainer