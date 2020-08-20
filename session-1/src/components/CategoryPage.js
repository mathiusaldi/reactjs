import React from "react";
import {  useParams } from "react-router-dom";
import ProductList from './ProductList';
import '../index.css';

export default function CategoryPage() {
    let { categoryId } = useParams();
    if(categoryId == 111){
        categoryId = "New Arrival";
    }else if(categoryId == 222){
        categoryId = "Best Seller";
    }
    return (
      <div className="category-page container">
        <div className="title"><h1>{categoryId}</h1></div>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
      </div>
    );
}