import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,

} from 'react-native';
import {
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useTheme } from "../src/theme/ThemeProvider";
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  const {dark, colors,setScheme}=useTheme();

  const toggleTheme=()=>
  {
      dark ? setScheme('light') : setScheme('dark')
  }
  return (


<DrawerContentScrollView {...props}  style={{backgroundColor:colors.primary}}>
 
      <View style={styles.drawerListWrapper} >
        <DrawerItemList {...props}  />
      </View>

      <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            padding:20,
            borderBottomWidth:1,
            borderStyle:'dashed',
            borderBottomColor:'gray'
        }}>
          <Text style={[{color:colors.text}]}>Mode</Text>
          <Switch value={dark} onValueChange={toggleTheme} style={{alignItems:'center'}}/>
        </View>
        <View style={{
            flex:1,
            padding:20,
            borderBottomWidth:1,
            borderStyle:'dashed',
            borderBottomColor:'gray'

        }}>
       
       <Text style={{textAlign:'center',color:colors.text}}>Layout</Text>
          

<View style={{justifyContent:'space-between',flexDirection:'row',color:colors.text}}>
<View>
<Text style={[{color:colors.text}]}>Modern</Text>
<Icon name='md-tablet-landscape-outline' style={{fontSize:35,color:colors.text}} />
</View>
<View>
<Text style={[{color:colors.text}]}>Minimal</Text>
          <Icon name='md-tablet-landscape-outline' style={{fontSize:35,color:colors.text}} />
</View>
</View>

<View style={{justifyContent:'space-between',marginTop:20,flexDirection:'row',color:colors.text}}>
<View>
<Text style={[{color:colors.text}]}>Retro</Text>
<Icon name='md-tablet-landscape-outline' style={{fontSize:35,color:colors.text}} />
</View>
<View>
<Text style={[{color:colors.text}]}>Classic</Text>
          <Icon name='md-tablet-landscape-outline' style={{fontSize:35,color:colors.text}} />
</View>
</View>
        </View>
        <View style={{
            flex:1,
            padding:20,
            borderBottomWidth:1,
            borderStyle:'dashed',
            borderBottomColor:'gray'

        }}>
       
       <Text style={{textAlign:'center',color:colors.text}}>Direction</Text>
          

<View style={{justifyContent:'space-between',flexDirection:'row',color:colors.text}}>
<View>
<Text style={[{color:colors.text}]}>LTR</Text>
<Icon name='md-reader' style={{fontSize:35,color:colors.text}} />
</View>
<View>
<Text style={[{color:colors.text}]}>RTL</Text>
          <Icon name='md-reader' style={{fontSize:35,color:colors.text}} />
</View>
</View>
        </View>
<View style={{
            flex:1,
            padding:10,
            borderBottomWidth:1,
            borderStyle:'dashed',
            borderBottomColor:'gray'

        }}>
<Text style={{textAlign:'center',color:colors.text,margin:10}}>Color</Text>
          

<View style={{justifyContent:'space-between',flexDirection:'row',color:colors.text,alignItems:'center'}}>
<View style={{flex:1}}>
<Text style={[{color:colors.text}]}>Black</Text>
<View style={{backgroundColor:'#969A97',borderRadius:5}}><Text style={{backgroundColor:'black',margin:10,borderRadius:10}}></Text></View>
</View>
<View style={{flex:1}}>
<Text style={[{color:colors.text}]}>Green</Text>
<View style={{backgroundColor:'#969A97',borderRadius:5,margin:10}}><Text style={{backgroundColor:'green',margin:10,borderRadius:10}}></Text></View>
</View>

</View>
</View>
    </DrawerContentScrollView>

  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    
    // borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
