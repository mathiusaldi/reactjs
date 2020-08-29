import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {  useParams } from "react-router-dom";
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/action/cart";

const CategoryPage = () => {
  let { url } = useRouteMatch();
  let { categoryId } = useParams();
  const dispatch = useDispatch();
  const dataCategory = useSelector((state) => state.category);

  const handleAdd = (productId, productName, productImage, productPrice) => {
    dispatch(
      addProduct({
        id: productId,
        name: productName,
        img : productImage,
        price : productPrice,
        qty : 1
      })
    );
  };

  return (
    <div>
        {dataCategory &&
          dataCategory.category.length > 0 &&
          dataCategory.category.map((item, index) => {
            if(categoryId == item.id) return(
                <div className="category-page container" key={item.id}>
                     <div className="title"><h1>{item.name}</h1></div>
                <div>
                    {item &&
                        item.products.length > 0 &&
                        item.products.map((product) => { 
                          return(
                          <div className="product-list" key={product.id}>
                              <div className="product-item">
                                  <div className="product-image"><img src={product.img} alt="" /></div>
                                  <div className="product-info">
                                      <div className="product-name">{product.name}</div>
                                      <div className="price"><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></div>
                                      <button onClick={() => handleAdd(product.id, product.name, product.img, product.price )}>Add to Cart</button>
                                      <div className="view"> <Link to={`/product?productNo=${product.id}&productName=${product.name}&productPrice=${product.price}&productImg=${product.img}`}>View Product</Link></div>
                                  </div>
                              </div>
                          </div>
                          );
                          
                        }
                    )}
                </div>
                </div>
            );
          }
        )}
    </div>
  );
};

export default CategoryPage;
