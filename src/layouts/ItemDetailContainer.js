import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
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
      toast.error("No such document!")
    }
  }

  useEffect(() => {
    const docRef = doc(db, process.env.REACT_APP_DBPATH.stock, `${item_id}`);
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