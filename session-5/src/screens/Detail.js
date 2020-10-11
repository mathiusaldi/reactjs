import React, { useState } from "react";
import { Button, Image, Text, View, Dimensions } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action/cart";
import { ScrollView } from "react-native-gesture-handler";

const productDetail = gql`
  query HomeCategory($ids: String!) {
    products(pageSize: 1, filter: { sku: { eq: $ids } }) {
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
        description {
          html
        }
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

const ImgWidth = "100%";

const ImgHeight = 260;

const Detail = ({ route }) => {
  const [count, setCount] = useState(1);

  function addCount(inc) {
    setCount(count + inc);
  }

  function minusCount(inc) {
    if (count >= 2) {
      setCount(count - inc);
    }
  }

  const dispatch = useDispatch();

  const { id } = route.params;

  const { loading, error, data } = useQuery(productDetail, {
    variables: { ids: id },
    // fetchPolicy: 'no-cache'
  });

  if (loading) return <Text>Loading...</Text>;

  const productpage = data.products.items;

  const handleAdd = (
    productId,
    productName,
    productImage,
    productPrice,
    productQty
  ) => {
    dispatch(
      addProduct({
        id: productId,
        name: productName,
        img: productImage,
        price: productPrice,
        qty: productQty,
      })
    );
  };

  return (
    <ScrollView>
      {productpage.map((val, idx) => {
        return (
          <View key={idx} style={{ alignItems: "center" }}>
            <View style={{ width: "50%", alignSelf: "center" }}>
              <Image
                style={{
                  height: ImgHeight,
                  width: ImgWidth,
                }}
                source={{
                  uri: val.image.url,
                }}
              />
            </View>
            <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 25 }}>{val.name}</Text>
            <Text style={{fontStyle: "italic"}}>sku: #{val.sku}</Text>
            <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 20, fontWeight: "bold" }}>$ {val.price.regularPrice.amount.value}</Text>
            <View style={{ flexDirection: "row", width: "50%" }}>
              <View style={{ flex: 2 }}>
                <Button title="-" onPress={() => minusCount(1)} />
              </View>
              <Text style={{ flex: 4, textAlign: "center", marginTop: 7 }}>
                {count}
              </Text>
              <View style={{ flex: 2 }}>
                <Button title="+" onPress={() => addCount(1)} />
              </View>
            </View>
            <View style={{ marginVertical: 40}}>
            <Button
              title="Add to Cart"
              onPress={() =>
                handleAdd(
                  val.sku,
                  val.name,
                  val.image.url,
                  val.price.regularPrice.amount.value,
                  count
                )
              }
            />
            </View>
            <View style={{paddingHorizontal: 20, marginBottom: 40}}>
              <Text style={{fontSize: 20, marginBottom: 10}}>Description</Text>
            <Text>{val.description.html}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Detail;
