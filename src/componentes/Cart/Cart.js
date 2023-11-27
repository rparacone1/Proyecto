import './Cart.css'
import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import cartItem from '../'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, cleanCart, totalQuantity, total} = useContext(cartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <link to='/' className='Option'> Productos </link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p=> <cartItem key ={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <link to='/checkout' className='Option'>Checkout</link>
        </div>
    )
}