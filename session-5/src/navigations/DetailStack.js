import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail'

const Stack = createStackNavigator();


const DetailStack = () => {
  return (
    <Stack.Navigator initialRouteName="Detail" >
      <Stack.Screen name="Detail" component={Detail} options={{
          tabBarVisible: false,
        }}/>
    </Stack.Navigator>
  )
}

export default DetailStack
