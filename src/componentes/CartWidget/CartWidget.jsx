import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
            <strong> 5 </strong>
        </div>
    )
}

export default CartWidget