import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import './DisplayProduct.css'
export const DisplayProduct = (params) => {
  let location = useLocation();
  console.log(location)
  const [imgCarouselindex, setImgCarouselindex] = useState(0);
  const [CarouselArray, setCarouselArray] = useState([...location.state.img].slice(0, 1));
  
  const setNextIndexValue = () => {
    setImgCarouselindex(imgCarouselindex + 1)

    console.log(imgCarouselindex)

  }
  useEffect(() => {
    setCarouselArray(() => {
      if (imgCarouselindex + 1 > location.state.img.length) {
        setImgCarouselindex(0);
      }
      return [...location.state.img].slice(imgCarouselindex, imgCarouselindex + 1)
    })

    
  }

    , [imgCarouselindex])
  return (
    <div className='display-product'>
      <div className='image-path'> {`Home > ${location.state.productGrpName} > ${location.state.productHeading
        }`}</div>
      <div className='images-details'>
        <FaChevronRight onClick={setNextIndexValue} className='righ-logo'/>
        {CarouselArray.map((e) => {

          return (
            <div>
              <img src={require('../images/' + e.img)} />
            </div>
          )
        })}


      </div>
    </div>
  )
}
