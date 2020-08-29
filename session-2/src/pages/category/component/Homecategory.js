import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
import { addProduct } from "../../../redux/action/cart";

const Homecategory = (props) => {
  let { url } = useRouteMatch();
  const dataCategory = useSelector((state) => state.category);
  const dispatch = useDispatch();

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
      <ul>
        {dataCategory &&
          dataCategory.category.length > 0 &&
          dataCategory.category.map((item, index) => {
            if(props.id == item.id) return(
                <div className="category-product" key={item.id}>
                    <h1>{item.name}</h1>

                <div>
                    {item &&
                        item.products.length > 0 &&
                        item.products.map((product, index) => {
                        if(props.showitem > index) return(
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
                        );}
                    )}
                </div>
                <span className="view-more"><Link to={`${url}category/${item.id}`}>View More</Link></span>
                </div>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Homecategory;
