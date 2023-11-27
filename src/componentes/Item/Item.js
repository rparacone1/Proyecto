import React from 'react'
const item = ({id, name, img, price, stock}) => {
  return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className='Info'></p>
                Precio: ${price}
            <p className='Info'></p>
                Stock disponible: {stock}
        </section>
        <footer className='ItemFooter'>
            <link to={`/item/${id}`} className='Option'>Ver Detalle</link>
            <button className='Option'>Ver detalle</button>
        </footer>
    </article>
    ) 
}

export default item