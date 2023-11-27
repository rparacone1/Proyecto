import {db} from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading, setloading]
    const [orderId, setOrderId]
    const {cart, total, clearCart} = useContext(CartContext)
    
    const createOrder = async({name, phone, mail}) => {
        setloading(true)

        try {
            const objoOrder = {
                buyer: { name, phone, email
            },
            items: cart,
            total: total, 
            date: Timestamp.fromDate(new Date())
        }
    
        const batch = writeBatch(db)
        const outOfStock = []
        const ids = cart.map(prod=> prod.id)
    const productsRef = collection(db, 'products')
    const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in',)))}
    const {docs} = productsAddedFromFirestore

    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stockDb

        const productAddedToCart = cart.find(prod => prod.id == doc.id)
        const prodQuantity = productAddedToCar?.quantity

    }) 
}
    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }
    if(orderId){
        return <h1>El id de su orden es</h1>
    }
    return (
    <div>
        <h1>checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
    </div>
)


export default Checkout
}