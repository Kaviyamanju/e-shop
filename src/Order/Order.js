import React from 'react'
import { AppContext } from '../Context';
import { useContext } from 'react';

import "./Order.css"

export const Order = () => {
    const{orders,meals} =useContext(AppContext);
    console.log(orders)
  return (
    <div>
    <div>
    <p className='heading'>Orders</p>

    {orders.map((order) => (
      <div key={order.id} className='order-align'>
        <div className="order-id">
            <p>Order ID: {order.id}</p>
            <p>Total:{order.totalAmount}</p>
        </div>
        {Object.entries(order.items)?.map(([mealId, quantity]) => {
            const meal = meals.meals.find((meal) => meal.strMeal== mealId)

            return (
            <div key={mealId}>
                <div >
                    <div className="order-text-align">
                        <img src={meal?.strMealThumb} className="cart-img" alt={""} />
                        <div className="cart-box">
                            <p>{mealId}</p>
                            <p className='rupee'>₹100/</p>
                        </div>
                        <p className="totalValue"><span>{order.items[mealId]} x 100</span><span>=</span> <span>{order.items[mealId] *100}</span></p>
                
                    </div>


                    <p className="line"></p>
                </div>
               
            </div>

            );
        })}
      </div>
    ))}
  </div>
  </div>
  )
}

