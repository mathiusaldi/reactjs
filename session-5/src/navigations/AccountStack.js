import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Acccount from '../screens/Account'
import Home from '../screens/Home';

const Stack = createStackNavigator();


const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name="Acccount" component={Acccount} />
    </Stack.Navigator>
  )
}

export default AccountStack