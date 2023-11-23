import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {GoPerson} from 'react-icons/go';
import {AiOutlineStar} from 'react-icons/ai';
import {CgShoppingCart} from 'react-icons/cg'
import './Navbar.css'
import Cart from '../cart/Cart';
const Navbar = (props) => {
const [className ,setClassName] = useState('cart');
const [showcart ,setShowCart] = useState(false);

    const openShoppingCart =()=>{
        setShowCart(true);
        setClassName('cart active')
    }
  return (
    <div>
    <nav>
    <div className='logo'>
        <h2>LOGO</h2>
    </div>
    <div className='nav-items'>
    <div className='nav-headings'>
        <ul>
            <li>Saree</li>
            <li>Lehenga</li>
            <li>Salwar kameez</li>
            <li>Gowns</li>

        </ul>
    </div>
    <div className='nav-icons'>
<ul>
    <li><AiOutlineSearch /></li>
    <li><GoPerson /></li>
    <li><AiOutlineStar /></li>
    <li><CgShoppingCart onClick ={openShoppingCart} /></li>
</ul>
    </div>
    </div>
   
    </nav>
    <div className={className}>
      {showcart && <Cart  cartITems = {props.cartITems}  onShow= {()=>setShowCart(false)} className = "cart-listing"/>}
    </div>
    </div>
  )
}

export default Navbar
