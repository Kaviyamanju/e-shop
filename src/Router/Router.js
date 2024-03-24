import React from 'react';

import { Route, Routes, BrowserRouter  as Router} from "react-router-dom";
import AppProvider from '../Context'; 
import Category from '../Category/Category';
import Navbar from '../Navbar/Navbar';
import { Itemlist } from '../Items/Itemlist';
import { Itemdetail } from '../Itemdetail/Itemdetail';
import { Cart } from '../Cart/Cart';
import {Order} from "../Order/Order";

const Path = () => {
    return (
        
        <AppProvider>
        
        <Router>
        <Navbar />
         <Routes>
          <Route exact path="/" element={<Category/>} />
          <Route exact path="/ItemList" element={<Itemlist/>}/>
          <Route exact path="/Itemdetails" element={<Itemdetail/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
          <Route exact path="/Order" element={<Order/>}/>
         </Routes>
        </Router>
      </AppProvider>
 
    );
};

export default Path;
