import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className='header'>
        <nav>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Sobre Nosotros</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </nav>
        <h1>Nombre del negocio</h1>
        <CartWidget/>
    </header>
  )
}

export default NavBar