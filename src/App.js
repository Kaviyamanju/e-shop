
import './App.css';
import Path from './Router/Router';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Category from './Category/Category';
import Navbar from './Navbar/Navbar';
import { Itemlist } from './Items/Itemlist';

function App() {
  return (
    <div >
      <Path/>
    </div>
  );
}

export default App;
