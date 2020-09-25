import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container, Typography } from "@material-ui/core";
import Link from "next/link";
import { removeProduct } from "../../redux/action/cart";

const CartPage = () => {
  const dataCart = useSelector((state) => state.cart);
  const subTotal = dataCart.cart.reduce(
    (totalPrice, product) => totalPrice + product.price * product.qty,
    0
  );

  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(
      removeProduct({
        id: productId,
      })
    );
  };

  return (
    <Container>
      <div className="cart-page container">
        <div className="title">
          <h1>Cart Page</h1>
        </div>
        {dataCart && dataCart.cart.length > 0 ? (
          dataCart.cart.map((item, index) => (
            <div className="item" key={index}>
              <div className="images">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="info">
                <Typography>
                  {" "}
                  <div className="product-name">
                    <Link href="/product/[id]" as={"/product/" + item.id}>
                      <a>
                        <Typography>{item.name}</Typography>
                      </a>
                    </Link>
                  </div>
                </Typography>
                <Typography>
                  <span>sku : {item.id}</span>
                </Typography>
                <div className="price">
                  <Typography>
                    <NumberFormat
                      value={item.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$ "}
                    />
                  </Typography>
                </div>
                <div className="total">
                  <Typography>
                    <span>Qty : {item.qty}</span>
                  </Typography>
                </div>
              </div>
              <div className="subtotal">
                <Typography>
                  <NumberFormat
                    value={item.price * item.qty}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$ "}
                  />
                </Typography>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="action-delete"
              >
                <DeleteIcon />
              </button>
            </div>
          ))
        ) : (
          <div className="empty-cart">No item</div>
        )}

        {
          <div className="grand-total">
            <Typography>
              <span className="label">Total :</span>
            </Typography>
            <Typography>
              <span className="price">
                <NumberFormat
                  value={subTotal}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$ "}
                />
              </span>
            </Typography>
          </div>
        }
      </div>
      <style jsx>
        {`
          .cart-page .title {
            padding: 0 15px;
          }

          .cart-page .item {
            clear: both;
            padding: 0 15px;
            border-top: 1px solid #f2f2f2;
          }

          .cart-page .images {
            float: left;
            width: 20%;
            padding: 10px;
          }

          .cart-page .images img {
            max-width: 100%;
          }

          .cart-page .info {
            float: left;
            margin-top: 20px;
            padding-left: 20px;
          }

          .cart-page .subtotal {
            float: right;
            margin-top: 20px;
            font-weight: 500;
          }

          .cart-page .product-name {
            text-align: left;
            font-size: 16px;
          }

          .cart-page .grand-total {
            clear: both;
            text-align: right;
            font-size: 24px;
            font-weight: 500;
            padding: 20px 15px;
            border-top: 2px solid #f2f2f2;
          }

          .cart-page .grand-total .price {
            margin-left: 60px;
          }

          .item {
            overflow: hidden;
            position: relative;
          }
          .action-delete {
            background-color: unset;
            border: 0px;
            position: absolute;
            right: 20px;
            bottom: 20px;
            cursor: pointer;
          }
          .product-name a{
            color: #000000;
          }
        `}
      </style>
    </Container>
  );
};

export default connect()(CartPage);
