import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from "./HomeStack";
import CartStack from "./CartStack";
import DetailStack from "./DetailStack";
import CategoryStack from "./CategoryStack";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const dataCart = useSelector((state) => state.cart);
  const totalItem = dataCart.cart.reduce(
    (item, product) => item + product.qty,
    0
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-home"
              : "ios-home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          } else if (route.name === "Category") {
            iconName = focused ? "ios-keypad" : "ios-keypad-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerStatusBarHeight: 0}} />
      <Tab.Screen name="Category" component={CategoryStack} />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{ tabBarBadge: totalItem  , tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
