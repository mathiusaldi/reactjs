import React, {useState} from "react";
import {useLocation, Link } from "react-router-dom";
import '../index.css';

export default function ProductPage() {
    let query = new URLSearchParams(useLocation().search);
    const [count, setCount] = useState(1);

    function addCount(inc){
        setCount(count + inc)
    }

    function minusCount(inc){
        if(count >= 2){
            setCount(count - inc)
        }
    }

    return (
        <div className="product-page container">
            <div><img src={query.get("productImg")} alt={query.get("productName")}/></div>
            <div className="name">{query.get("productName")}</div>
            <div  className="sku">sku: #{query.get("productNo")}</div>
            <div className="price">{query.get("productPrice")}</div>
            <div className="action-secondary">
                <button className="minus-button" onClick={() => minusCount(1)}>-</button>
                <span className="count">{count}</span>
                <button className="plus-button" onClick={() => addCount(1)}>+</button>
            </div>
            <div className="action-primary">
                <span className="add-to-cart"><Link to="/cart">Add to Cart</Link></span>
            </div>
            <div className="description">
                <span className="title">
                    Description :
                </span>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
      </div>
    );
}