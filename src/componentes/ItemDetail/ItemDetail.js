import "./ItemDetail.css";
import "../ItemCount/ItemCount";
import { useState } from 'react'
import { link } from 'react-router-dom'
0
const ItemDetail = ({ id, name, img, category, decription, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const handleonAdd = (quantity) => {
    setQuantityAdded (quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)
  }

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {
          quantityAdded > 0 ? (
            <link to = '/cart' className='option'>Terminar compra </link>
          ) : (
            <itemCount initial ={1} stock ={stock} onAdd={handleonAdd}></itemCount>
          )
        }
      </footer>
    </article>
  )
};

export default ItemDetail
