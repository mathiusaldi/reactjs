import React, { useState } from "react";
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
import { FlatList } from "react-native-gesture-handler";

const catalogSchema = gql`
  query HomeCategory($ids: String) {
    products(pageSize: 100, filter: { category_id: { eq: $ids } }) {
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

const ImgWidth = Dimensions.get("window").width;

const ImgHeight = 260;

const Catalog = ({ route }) => {

  const { id } = route.params;

  const { loading, error, data } = useQuery(catalogSchema, {
    variables: {
      ids: id,
    },
  });

  if (loading) return <Text>Loading...</Text>;

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

  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        width: "80%",
        alignSelf: "center",
        marginHorizontal: 15,
        marginVertical: 40,
      }}
    >
      <Image
        style={{
          height: ImgHeight,
          width: "100%",
        }}
        source={{
          uri: item.image.url,
        }}
      />
      <Text
        onPress={() => navigation.navigate("Detail", { id: item.sku })}
        style={{
          marginVertical: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontStyle: "italic",
        }}
      >
        sku: #{item.sku}
      </Text>
      <Text
        style={{
          fontSize: 18,
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

  return (
    <SafeAreaView>
      <FlatList
        data={data === undefined ? [] : data.products.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Catalog;
