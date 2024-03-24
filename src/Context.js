import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();
function AppProvider ({ children })  {
    const [categoriesValue, setCategories] = useState([]);
    const [orders,setOrders] =useState([]);

    const [cart, setCart] = useState({});
    const [meals,setmeals] =useState([]);


    const handleCategories=(props)=>{
       setCategories(props);  
    }

    const addToCart = (mealId) => {
        setCart(prevCart => ({
          ...prevCart,
          [mealId]: (prevCart[mealId] || 0) + 1
        }));
      };
    
    const removeFromCart = (mealId) => {
        // Check if the item is in the cart and its quantity is greater than 0
        if (cart[mealId] && cart[mealId] > 1) {
          // Decrease the quantity of the item by 1
          setCart(prevCart => ({
            ...prevCart,
            [mealId]: prevCart[mealId] - 1
          }));
        } else if (cart[mealId] === 1) {
          // If the quantity of the item is already 0, remove it from the cart
          const updatedCart = { ...cart };
          delete updatedCart[mealId];
          setCart(updatedCart);
        }
      };
      const calculateTotalAmount = (cart) => {
        let total = 0;
        for (const quantity of Object.values(cart)) {
          total += quantity * 100; // Assuming each item costs 100
        }
        return total;
      }
    const handleOrder =()=>{
        const orderId = orders.length +  1
        const totalAmount = calculateTotalAmount(cart);
        const order = { id: orderId, items: { ...cart }, totalAmount: totalAmount };
        setOrders([...orders, order]); 
        setCart({})
    }
   const handleMeals =(props)=>{
     setmeals(props)
   }

    return (
        <AppContext.Provider value={{ categoriesValue, 
        cart,handleCategories,
        addToCart, removeFromCart, orders,handleOrder,meals,handleMeals
         }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
