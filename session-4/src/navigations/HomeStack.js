import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Cart from "../screens/Cart";
import Category from "../screens/Category";


const Stack = createStackNavigator();

const HomeStack = ({ navigation, route }) => {
  useEffect(() => {
    if (route.state && route.state.index > 0) {
      navigation.setOptions({ tabBarVisible: false });
      navigation.setOptions({ headerMode: 'none'});
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  });

  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default HomeStack;
