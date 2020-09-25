import Head from "next/head";
import Link from "next/link";
import { withApollo } from "../lib/apollo";
import { Container } from "@material-ui/core";
import HomeCategory from "../components/HomeCategory";
import Category from "../pages/category";

const Home = (props) => {

  return (
    <Container>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img
          src="/images/banner.jpg"
          alt="banner-top"
          className="banner-top"
        />
      </div>
      <div className="left">
        <Category />
      </div>
      <div className="right">
        <HomeCategory id={49} title={"#dirumahaja"} />
        <HomeCategory id={45} title={"Best Seller"} />
      </div>
      <style jsx>{`
        .banner-top {
          width: 100%;
          margin-top: 100px;
        }
        .left{
          width: 30%;
          display: inline-block;
          vertical-align: top;
        }
        .right{
          width: 70%;
          display: inline-block;
          vertical-align: top;
        }
      `}</style>
    </Container>
  );
};

export default withApollo({ ssr: true })(Home);
