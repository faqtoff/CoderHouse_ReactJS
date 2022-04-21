import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase';
import { toast } from 'react-toastify';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {category_id} = useParams()

  useEffect(() => {
    
    getDocs(collection(db, process.env.REACT_APP_DBPATH.stock))
    .then((querySnapshot) => {
      let docs = []
      querySnapshot.forEach((doc) => {
        docs.push({id: doc.id, ...doc.data()})
      });
      
      category_id 
      ? setProductos(docs.filter((item) => item.category_id === category_id))
      : setProductos(docs)
    })
    .catch((error) => {
      toast.error(error)
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