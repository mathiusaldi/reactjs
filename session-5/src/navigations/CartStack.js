import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home'
import Cart from '../screens/Cart';

const Stack = createStackNavigator();


const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default CartStack