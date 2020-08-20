import React from "react";
import {Link} from "react-router-dom";
import '../index.css';

const products= [
    { id: "111", name: "Eve One", price: "Rp.450.000", img: "/images/product1.jpg"},
    { id: "222", name: "Tube Force", price: "Rp.675.000", img: "/images/product2.jpg" },
    { id: "333", name: "Vanci", price: "Rp.775.000", img: "/images/product3.jpg" },
    { id: "333", name: "Tessa", price: "Rp.575.000", img: "/images/product4.jpg" },
];

export default function ProductList() {
  return (
    <>
    {products.map((order, index) => (
        <div className="product-list" key={index}>
            <div className="product-item">
                <div className="product-image"><img src={order.img} alt="" /></div>
                <div className="product-info">
                    <div className="product-name">{order.name}</div>
                    <div className="price">{order.price}</div>
                    <div className="view"> <Link to={`/product?productNo=${order.id}&productName=${order.name}&productPrice=${order.price}&productImg=${order.img}`}>View Product</Link></div>
                </div>
            </div>
        </div>
    ))}
    </>
  );
}
