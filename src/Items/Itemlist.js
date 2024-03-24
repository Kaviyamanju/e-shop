import React ,{useState,useEffect, useContext} from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import axios from "axios";
import "./Itemlist.css";
import { Itemdetail } from '../Itemdetail/Itemdetail';
import { AppContext } from '../Context';

export const Itemlist = () => {
    const location = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [showQuantity, setShowQuantity] = useState({});
    const {addToCart,removeFromCart,cart,meals,handleMeals} =useContext(AppContext)
    const Navigate=useNavigate()
    const itemName = location.state.itemName;
    console.log(itemName);
    if(itemName){
      ListApiCall()
    }
    async function ListApiCall(){
           await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${itemName}`).then((res)=>{
            handleMeals(res.data)
             }).catch(()=>{
    
           })
        }
   const handleClick =(itemdetailsName,itemName)=>{
    console.log(itemdetailsName,"itemdetails")
    Navigate("/Itemdetails",{state:{detail:itemdetailsName,detailName:itemName} })

   }
   const handleAddToCartClick = (id) => {
     setShowQuantity(prevQuantity =>({
        ...prevQuantity,
        [id]:true
     }));
};


  useEffect(()=>{
     console.log(cart)
     console.log(showQuantity);
  },[cart])
  return (
    <div>
     <p className='heading'>{itemName}</p>
        <div className='Card-Container'>     
       {meals?.meals?.slice(0,7).map((item,index)=>(
        <div className='Card card-height'>
          <img src={item.strMealThumb} className='img'  onClick={()=>handleClick(item.strMeal,itemName)}></img> 
          <p className='Category-1'>{item.strMeal} </p>
          <p className='Category'>₹100/</p>
          {(!showQuantity[index]) && (
                <button className='button button-1' onClick={()=>{handleAddToCartClick(index)}}>
                    Add to Cart
                </button>
            )}
            {(showQuantity[index] ) && (
                <div className=' button-align'>
                    <button className='button' onClick={() => removeFromCart(item.strMeal)}>-</button>
                    <button>{cart[item.strMeal]||0}</button>
                    <button className='button' onClick={() => addToCart(item.strMeal)}>+</button>
                </div>
            )}
        </div>

       ))}
       </div>
    </div>
   
  )
}

