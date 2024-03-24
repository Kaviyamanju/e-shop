import React, { useState,useContext } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Categories from '../Category.json';
import "./Itemdetail.css";
import { AppContext } from '../Context';
export const Itemdetail = () => {
    const location = useLocation();
   const{cart,addToCart,removeFromCart} =useContext(AppContext);
   const [showQuantity,setShowQuantity]=useState(false)
    
    const itemName = location.state.detail;
    const itemValue=location.state.detailName;
    console.log(itemName)
    var filterItem;
    if(itemName)
    {
         filterItem=Categories.categories?.filter((item)=>item.strCategory ==itemValue)

    }
console.log(filterItem)


  return (
    <div className='card-align'>
        <div >
            <p className='heading'>{itemName} </p>
            <div className='Card-1' >
               <img src={filterItem[0]?.strCategoryThumb} ></img> 
            </div>
        </div>
        <div className='detail-align'>
            <p className='content-width'>{filterItem[0]?.strCategoryDescription} </p>
            {cart[itemName]>0 || showQuantity?
           (<div className=' button-align'>
           <button className='button' onClick={() => removeFromCart(itemName)}>-</button>
           <button>{cart[itemName]||0}</button>
           <button className='button' onClick={() => addToCart(itemName)}>+</button>
   </div>):(<button className='button button-1' onClick={(e)=>setShowQuantity(true)} >Add to Cart</button>
            )
}
        </div>
    </div>
    )
}
