import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/action/cart";

const Cart = () => {
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
    <ScrollView style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <View style={{ flex: 3 }}>
          <Text style={{ textAlign: "left", fontSize: 20, fontWeight: "bold" }}>
            Items
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}
          >
            Sub Total
          </Text>
        </View>
      </View>
      {dataCart && dataCart.cart.length > 0 ? (
        dataCart.cart.map((item, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{
                    width: "100%",
                    height: 120,
                  }}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>
              <View style={{ flex: 2, paddingLeft: 10, position: "relative" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 12, fontStyle: "italic" }}>
                  #{item.id}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text>{item.qty}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>x</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>$ {item.price}</Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, position: "relative" }}>
                <Text
                  style={{
                    right: 0,
                    bottom: 10,
                    position: "absolute",
                    fontWeight: "bold",
                  }}
                >
                  $ {item.qty * item.price}
                </Text>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text>No item</Text>
      )}

      {
        <View style={{flexDirection: "row", marginBottom: 100}}>
          <View style={{flex: 2}}>
            <Text style={{textAlign: "right", fontSize: 20, fontWeight: "bold"}}>Grand Total</Text>
          </View>
          <View  style={{flex: 1}}>
            <Text style={{textAlign: "right", fontSize: 20, fontWeight: "bold"}}>$ {subTotal}</Text>
          </View>
        </View>
      }
    </ScrollView>
  );
};

export default connect()(Cart);
