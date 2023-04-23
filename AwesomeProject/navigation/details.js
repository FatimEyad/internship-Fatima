import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Homee';
import Setting from '../screens/Setting';
import { createStackNavigator } from '@react-navigation/stack';
import First from '../screens/Home';
import Detaill from '../screens/Search';
import Moreinfo from '../screens/Notfication';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Detail() {
  return (
    <Stack.Navigator screenOptions={{}}  initialRouteName="Home">
      <Stack.Screen name="Detaill" component={Detaill} />
      <Stack.Screen name="Moreinfo" component={Moreinfo} />

    </Stack.Navigator>
  );
}
export default Detail;

