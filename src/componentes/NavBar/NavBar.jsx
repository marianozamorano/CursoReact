import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>Mi Primer E-Commerce</h1>
            <nav>
                <ul>
                    <li>Comidas</li>
                    <li>Bebida</li>
                    <li>Para picar</li>
                    <li>Menú infantil</li>
                    <li>Menú vegano</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar