import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { withApollo } from "../../lib/apollo";

const Menu = (props) => {
  const dataCart = useSelector((state) => state.cart);
  const totalItem = dataCart.cart.reduce(
    (item, product) => item + product.qty,
    0
  );

  return (
    <div className="header-container">
      <Container>
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="cart-icon">
          <Link href="/cart">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={totalItem} color="secondary">
                <a>
                  <ShoppingCartIcon style={{ color: "#000000" }} />
                </a>
              </Badge>
            </IconButton>
          </Link>
        </div>
      </Container>
      <style jsx>{`
        .header-container {
          background-color: #ff9f1a;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 99;
        }
        .logo {
          width: 120px;
          padding: 10px 0;
          float: left;
          cursor: pointer;
        }
        .cart-icon {
          float: right;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default withApollo({ ssr: true })(Menu);
