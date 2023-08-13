import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../itemList/itemList';



const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState([]) //State donde grabo los items
  const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos 

  const getData = async (categoria) => {
    
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'items'), where("categoryId", "==", categoryId))
      : collection(querydb, 'items');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setItems(datos)
  }

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])



  return (
    <ItemList items={items}/>
  );
};

export default ItemListContainer;





