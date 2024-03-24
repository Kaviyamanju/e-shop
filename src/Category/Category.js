import React, { useState, useEffect, useContext, Fragment } from 'react';
 import { AppContext } from '../Context';
 import Categories from '../Category.json';
 import "./Category.css";
 import { useNavigate, useLocation } from "react-router-dom";
 import axios from "axios";

 

function Category(){
    let Navigate=useNavigate();
    const {handleCategories ,categoriesValue}=useContext(AppContext);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res)=>{
                handleCategories(res.data.categories)
     
            })
            .catch((err)=>{

            })
            
        };
        fetchData();
    }, []);
    const handleClick=(item)=>{
    console.log(item);
        Navigate("/Itemlist", {state: { itemName: item }} );
    }
    // useEffect(()=>{
    //   console.log(categoriesValue)
    // },[categoriesValue])


     return(
        <Fragment>
            <p className='heading'>Categories</p>
        <div className='Card-Container'>     
       {categoriesValue?.slice(0,8).map((item)=>(
        <div className='Card' onClick={()=>handleClick(item.strCategory)}>
          <img src={item.strCategoryThumb}></img> 
          <p className='Category'>{item.strCategory} </p>
        </div>
       ))}
            
        </div>
    </Fragment>
    )
}
export default Category;