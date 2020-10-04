import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Catalog from '../screens/Catalog';

const Stack = createStackNavigator();


const CatalogStack = () => {
  return (
    <Stack.Navigator initialRouteName="Catalog" >
      <Stack.Screen name="Catalog" component={Catalog}/>
    </Stack.Navigator>
  )
}

export default CatalogStack;
