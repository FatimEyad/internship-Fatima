import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import DrwarNavigator from './DrwarNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {

  return (
    <Stack.Navigator 
    screenOptions={{      
      headerShown:false,
    }}  initialRouteName="Home">
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Content" component={DrwarNavigator} />
    </Stack.Navigator>
  );
}
export default AuthNavigator;
