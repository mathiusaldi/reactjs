import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Category from '../screens/Category';
import Catalog from '../screens/Catalog';

const Stack = createStackNavigator();


const CategoryStack = ({ navigation, route }) => {
  
  useEffect(() => {
    if (route.state && route.state.index > 0) {
      navigation.setOptions({ tabBarVisible: false });
      navigation.setOptions({ headerMode: 'none'});
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  });

  return (
    <Stack.Navigator initialRouteName="Category" >
      <Stack.Screen name="Category" component={Category}/>
      <Stack.Screen name="Catalog" component={Catalog} />
    </Stack.Navigator>
  )
}

export default CategoryStack;
