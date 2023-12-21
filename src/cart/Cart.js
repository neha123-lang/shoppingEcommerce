import React from 'react'
import './Cart.css'
import { RxCross2 } from "react-icons/rx";
const Cart = ({cartITems, onShow}) => {
//     console.log(cartITems);
// const [showcart ,setShowCart] = useState(false);

    const cart = cartITems
  return (
    <div >
      <div className='cart-window' onClick={onShow}></div>
      <div className='cart-items'>
{cart.map((e)=>{
  return <p> {e}</p>
})}
 <div className='cart-summary'>
<div className='cart-total'>
<p>Cart Subtotal : </p>  <h2>143</h2>
</div>
<div>
  <button>View Cart</button>
  <button>Proceed to checkout</button>
</div>
      </div>
      </div>
     
     
    </div>
  )
}

export default Cart