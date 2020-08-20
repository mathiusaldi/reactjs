import React from "react";
import '../index.css';
const products =  [
    { id: "111", name: "Eve One", price: 450000, img: "/images/product1.jpg", totalItem: 1},
    { id: "222", name: "Tube Force", price: 675000, img: "/images/product2.jpg", totalItem: 2 },
    { id: "333", name: "Vanci", price: 775000, img: "/images/product3.jpg", totalItem: 2 },
    { id: "333", name: "Tessa", price: 575000, img: "/images/product4.jpg", totalItem: 4 },
];

const subTotal =  products.reduce((totalPrice, product) => totalPrice + ( product.price * product.totalItem) , 0);

export default function CartPage() {
    return (
        <div className="cart-page container">
            <div className="title"><h1>Cart Page</h1></div>
            {products.map((order, index) => (
                <div className="item" key={index}>
                    <div className="images">
                        <img src={order.img} alt={order.name}/>
                    </div>
                    <div className="info">
                        <div className="product-name">{order.name}</div>
                        <div className="price">{order.price}</div>
                        <div className="total">
                        <span>Qty : {order.totalItem}</span>
                        </div>
                    </div>
                    <div className="subtotal">{order.price * order.totalItem}</div>
                </div>
            ))}
            <div className="grand-total">
                <span className="label">Total :</span>
            <span className="price">{subTotal.toString()}</span>
            </div>
        </div>
    );
}