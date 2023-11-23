import React from 'react'
import './Product.css'
import { ProductResponse } from '../response/ProductResponse'

const Product = (props) => {
   
const handleclick = (ev )=>{
console.log(ev.target.innerHTML);
props.cartITems.push(ev.target.innerHTML);
console.log(props.cartITems) ;
}


return (
    <div className='product'>

        {ProductResponse.map((e , i )=> {
            return <div className = "product-listing" >

                <div className='propduct-card' onClick ={ (event )=>{return handleclick(event )}}>

                <img src={e.img[0]['img']} />
                <p>{e.productHeading}</p>
                <div>{e.rate}</div>
                    </div>
                 
               
              
                {/* <ul>
                {e.productDesc.map((p,i)=>{
return <li>{p.desc}</li>
                })}
                </ul> */}
                </div>
            
            })}
    </div>
  )
}

export default Product