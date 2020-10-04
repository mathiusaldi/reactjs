import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import { connect, useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/action/cart";

const categoryHomeSchema = gql`
  query HomeCategory($id: String) {
    products(pageSize: 4, filter: { category_id: { eq: $id } }) {
      total_count
      items {
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

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 260;

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const HomeCategory = (props) => {
  const { loading, error, data } = useQuery(categoryHomeSchema, {
    variables: {
      id: props.id,
    },
  });

  const dataCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

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

  const [activeSlide, setState] = useState(0);

  const navigation = useNavigation();

  function changeIndex(index) {
    setState(index);
  }

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          width: ITEM_WIDTH,
        }}
      >
        <Image
          style={{
            height: BannerHeight,
            width: "50%",
          }}
          source={{
            uri: item.image.url,
          }}
        />
        <Text
          onPress={() => navigation.navigate("Detail", { id: item.sku })}
          style={{
            marginVertical: 10,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            marginVertical: 10,
          }}
        >
          $ {item.price.regularPrice.amount.value}
        </Text>
        <Button
          title="Add to Cart"
          onPress={() =>
            handleAdd(
              item.sku,
              item.name,
              item.image.url,
              item.price.regularPrice.amount.value
            )
          }
        />
      </View>
    );
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>{props.title}</Text>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            loop
            autoplay={true}
            autoplayDelay={50}
            autoplayInterval={3000}
            layout={"default"}
            data={data === undefined ? [] : data.products.items}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={renderItem}
            onSnapToItem={(index) => changeIndex(index)}
          />
        </View>
        <Pagination
          dotsLength={data.products.items.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </SafeAreaView>
    </View>
  );
};

export default connect()(HomeCategory);
