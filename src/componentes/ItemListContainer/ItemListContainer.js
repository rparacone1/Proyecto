import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firebase' 
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection (db, 'products')
        
        getDocs(collectionRef)
            .then (response => {
                const producsAdapted = response.doc.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(producsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
        
export default ItemListContainer 
