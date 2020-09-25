import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/action/cart";
import NumberFormat from "react-number-format";

const CATEGORY_PAGE = gql`
  query HomeCategory($ids: String!) {
    products(pageSize: 20, filter: { category_id: { eq: $ids } }) {
      total_count
      items {
        categories {
          description
          name
          id
        }
        id
        name
        sku
        price {
          maximalPrice {
            amount {
              currency
              value
            }
          }
          minimalPrice {
            amount {
              currency
              value
            }
          }
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        url_key
        image {
          url
        }
      }
    }
  }
`;

const CategoryPage = (props) => {
  const dataCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(CATEGORY_PAGE, {
    variables: { ids: id },
    // fetchPolicy: 'no-cache'
  });

  if (loading) {
    return <div>loading...</div>;
  }

  const categorypage = data.products.items;

  const handleAdd = (productId, productName, productImage, productPrice) => {
    dispatch(
      addProduct({
        id: productId,
        name: productName,
        img: productImage,
        price: productPrice,
        qty: 1,
      })
    );
  };

  const onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.fallbackSrc,
        errored: true,
      });
    }
  };

  return (
    <div className="container">
      <Container>
        <div className="title">
          {categorypage.map((val, idx) => {
            if (idx == 0) {
              return (
                <div>
                  {val.categories.map((cat, idx) => {
                    if (cat.id == id) {
                      if (cat.description != null) {
                        const descp1 = cat.description;
                        const descp2 = descp1.replace(/<p>/g, "");
                        const desc = descp2.replace(/<\/p>/g, "");
                        return (
                          <div key={idx} className="title">
                            <Typography>
                              <h1>{cat.name}</h1>
                            </Typography>
                            <Typography>
                              <div className="description">{desc}</div>
                            </Typography>
                          </div>
                        );
                      } else {
                        return (
                          <div className="title">
                            <Typography>
                              <h1 key={idx}>{cat.name}</h1>
                            </Typography>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
        <div className="product-list">
          <Grid container spacing={3}>
            {categorypage.map((val, idx) => {
              return (
                <Grid container item xs={12} md={3} spacing={1} key={idx}>
                  <div className="product-item">
                    <Paper>
                      <div className="content">
                        <div className="image">
                          <img src={val.image.url} className="image" />
                        </div>
                        <div className="name">
                          <Link href="/product/[id]" as={"/product/" + val.sku}>
                            <a>
                              <Typography>{val.name}</Typography>
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <Typography>
                            <NumberFormat
                              value={val.price.regularPrice.amount.value}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$ "}
                            />
                          </Typography>
                        </div>
                        <button
                          className="button"
                          onClick={() =>
                            handleAdd(
                              val.sku,
                              val.name,
                              val.image.url,
                              val.price.regularPrice.amount.value
                            )
                          }
                        >
                          <Typography>Add to Cart</Typography>
                        </button>
                      </div>
                    </Paper>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
      <style jsx>{`
        .container {
          margin-top: 100px;
        }
        .image {
          width: 80%;
          margin: 0 auto;
          padding: 10px;
        }
        .name {
          text-align: center;
          margin-top: 10px;
        }
        .name a {
          color: #000000;
        }
        .price {
          text-align: center;
          font-weight: bold;
        }
        .button {
          margin: 0 auto;
          display: block;
          margin-top: 20px;
          margin-bottom: 20px;
          background-color: #ff9f1a;
          border: 0px;
          border-radius: 0px;
          padding: 10px 30px;
          color: #ffffff;
          cursor: pointer;
        }
        .title {
          text-align: center;
          margin-bottom: 30px;
        }
        .product-item {
          width: 100%;
        }
        .content{
          padding-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default withApollo({ ssr: true })(CategoryPage);
