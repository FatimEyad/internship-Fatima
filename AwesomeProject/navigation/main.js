import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Second from '../screens/Second';
import { StyleSheet,TouchableOpacity } from 'react-native';
import CustomTabButton from '../components/CustomTabButton';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import {useNavigation} from '@react-navigation/native';
import CustomTabBar from '../components/CustomTabBar';
import CustomTabBarButton from '../components/CustomTabButton';
import Search from '../screens/Search';
import Notfication from '../screens/Notfication';
import { useTheme } from "../src/theme/ThemeProvider";
import Contact from '../screens/Contact';

function Main() {
  const navigation = useNavigation();
  const {dark, colors,setScheme}=useTheme();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu"
                size={30}
                color={colors.text}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          );
        
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.text,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === "Second") {
            iconName = focused ? 'menu' : 'menu-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Notfication') {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }
          else if (route.name === 'Contact') {
            iconName = focused
              ? 'call'
              : 'call-outline';
          }

          return <Icon name={iconName} size={22} color={colors.text} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
      />
            <Tab.Screen
        name="Second"
        component={Second}
        options={{
          tabBarLabel: 'Settings',
          title: 'Settings',
          // headerShown: true,
        }}
        tabBarLabelStyle={{
          backgroundColor:colors.primary,
          fontSize:60
          
        }}
      />
                  <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          title: 'Search',
          // headerShown: true,
        }}
      />
        <Tab.Screen
        name="Notfication"
        component={Notfication}
        options={{
          tabBarLabel: 'Notification',
          title: 'Notification',
          // headerShown: true,
        }}
        
      />


       <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          title: 'Contact',
          headerShown: true,

        }}
      /> 
    </Tab.Navigator>
  );
}
export default Main;
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#7d5fff",
    borderTopWidth: 0,
borderRadius:2,
    height: 60,
  },
});
