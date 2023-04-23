import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Main from './main';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer'
const Drawer = createDrawerNavigator();
import { useTheme } from "../src/theme/ThemeProvider";

function DrwarNavigator() {
  const {dark, colors,setScheme}=useTheme();

  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor: colors.primary,
      drawerActiveTintColor:colors.text,
      
    }}
      >
      <Drawer.Screen name="Main" component={Main} 
      options={{
        title:'Home',
        drawerIcon:({color,size,focused}) =>{
          return <Icon name='home-sharp' size={30} color={color}/>
        },
        drawerLabelStyle:{
          marginLeft:-20,
          fontSize:30,
          fontFamily:'Roboto-Bold'
        }
      }}
      />

    </Drawer.Navigator>
  );
}
export default DrwarNavigator;
