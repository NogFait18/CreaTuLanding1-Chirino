import React from 'react'
import cart from "./shopingCart.ico"
import "./CartWidtget.css"


const CartWidget = () => {
  return (
    <a href=""><img src={cart} alt="Cart" className='cart'/></a>
  )
}

export default CartWidget