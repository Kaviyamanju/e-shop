import React from 'react';
import "./Cart.css";
import { useContext,useEffect ,useState} from 'react';
import { AppContext } from '../Context';

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
   const{cart,addToCart,removeFromCart,handleOrder,meals} =useContext(AppContext);
   const [total,setTotal] = useState(0);
   const Navigate=useNavigate()
   var totalValue=0;
   useEffect(()=>{
     totalValue = Object.entries(cart).reduce((total, [mealId, quantity]) => {   
        const itemPrice = 100; 
        return total + (itemPrice * quantity);
      }, 0); // 
      setTotal(totalValue)
 
   },[cart])
  return (
    <div>
      <p className='heading'>Cart Items</p>
      <div className="Summary">
        <div>
        {Object.entries(cart)?.map(([mealId, quantity]) => {
            const meal = meals.meals.find((meal) => meal.strMeal== mealId)

            return (
            <div key={mealId}>
                <div className='cart-align'>
                    <div className="cart-text-align">
                        <img src={meal?.strMealThumb} className="cart-img" alt={""} />
                        <div className="cart-box">
                            <p>{mealId}</p>
                            <p className='rupee'>₹100/</p>
                        </div>
                    </div>
                    <div className='button-alignment '>
                        <button className='button' onClick={() => removeFromCart(mealId)}>-</button>
                        <button>{cart[mealId]||0}</button>
                        <button className='button' onClick={() => addToCart(mealId)}>+</button>
                </div>
                </div>
               
            </div>
            );
        })}
        </div>
        
        {Object.keys(cart).length>0 && <div className='Amount-total'>
             <p className='SummaryText'>Summary</p>
        {Object.entries(cart)?.map(([mealId, quantity]) => (
            <div className="summaryValue">
          <p className='mealId'>{mealId}</p><p className="mealValue"><span>{cart[mealId]} x 100</span><span>=</span> <span>{cart[mealId] *100}</span></p>
          </div>
        ))}
        <div className='OrderAmount'>
           <p>Total</p><span className='orderedamount'>={total}/</span> 
         </div>      
        </div>
   }
      </div>
      {Object.keys(cart).length>0&& <button className='PlaceOrder' onClick={()=>{Navigate("/Order");handleOrder()}}>Place Order</button>}
    </div>
  )
}
