import React from "react";
import "./ItemDetailContainer.css";
import { UseState, useEffect } from "react";
import { getProductById } from "../../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import {db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = {id: response.id, ...data}
        setProduct(productAdapted)
      })
      .catch(error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
}, [itemId])

export default ItemDetailContainer;
