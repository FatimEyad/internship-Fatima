import {Button, Pressable,StyleSheet,Text, View} from 'react-native'
import React, {useContext} from 'react';
import { useTheme } from "../src/theme/ThemeProvider";
import Icon from 'react-native-vector-icons/Ionicons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Avatar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import DropdownComponent from '../components/DropdownComponent';


function First({navigation})
{
    const {dark, colors,setScheme}=useTheme();
return(
    <ScrollView style={[styles.container,{backgroundColor:colors.primary}]}>
            <Pressable onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu"
                size={30}
                color={colors.text}
                style={styles.menu}
              />
            </Pressable>
            <View style={styles.content}>
            <Avatar.Image style={styles.img} size={100} source={require('../assets/images/aa.webp')} />
            <Text style={{paddingTop:10, textAlign:'center',color:colors.text,fontFamily:'Roboto-Black'}}>TOTAL VALUE</Text>
            <Text style={{paddingTop:10, textAlign:'center',marginBottom:10,color:colors.text,fontFamily:'Roboto-Black'}}>$10,86,000</Text>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <View style={styles.mynft}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name="map" size={18} />
                    <Text style={{marginLeft:10,fontFamily:'Roboto-Black'}}>MY NFT'S</Text>
                    </View>
                    <Text>2</Text>
                </View>
                <View style={styles.mynft}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name="map" size={18} />
                    <Text style={{marginLeft:10,fontFamily:'Roboto-Black'}}>MY NFT'S</Text>
                    </View>
                    <Text>2</Text>
                </View>
                <View style={styles.mynft}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name="map" size={18} />
                    <Text style={{marginLeft:10,fontFamily:'Roboto-Black'}}>MY NFT'S</Text>
                    </View>
                    <Text>2</Text>
                </View>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <View style={[styles.mybook,{backgroundColor:'#fdedd4'}]}>
                    <Text  style={{textAlign:'center'}}>23</Text>
                    <View style={[styles.contentt]} >
                        <Text style={{marginLeft:10,fontFamily:'Roboto-Black'}}>MY BOOKINGS</Text>
                        <Text>2</Text>
                    </View>
                </View>
                <View style={[styles.mybook,{backgroundColor:'#e1f9f1'}]}>
                    <Text  style={{textAlign:'center'}}>23</Text>
                    <View style={[styles.contentt]} >
                        <Text style={{marginLeft:10,fontFamily:'Roboto-Black'}}>MY BOOKINGS</Text>
                        <Text>2</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <Text style={{color:colors.text ,marginBottom:10,fontFamily:'Roboto-Black'}}>ABOUT FORTIFY</Text>
                <Text  style={{color:colors.text,lineHeight:20}}>Welcome to Forify Investments, your claim value will be open with respect to our assets value. It is not time bassed. THANK YOU</Text>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <DropdownComponent/>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <Text  style={{color:colors.text ,marginBottom:10,fontFamily:'Roboto-Black'}}>DESCRIPTION</Text>
                <Text  style={{color:colors.text,lineHeight:20}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</Text>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <Text  style={{color:colors.text ,marginBottom:10,fontFamily:'Roboto-Black'}}>SOCIAL</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="logo-facebook" style={{color:colors.text}}/>
                    <Text style={{marginLeft:10 ,color:colors.text}}>Facebook</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="logo-facebook" style={{color:colors.text}}/>
                    <Text style={{marginLeft:10,color:colors.text}}>Facebook</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="logo-facebook" style={{color:colors.text}}/>
                    <Text style={{marginLeft:10,color:colors.text}}>Facebook</Text>
                </View>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <Text  style={{color:colors.text ,marginBottom:10,fontFamily:'Roboto-Black'}}>LINKS</Text>
                <Text  style={{color:colors.text,lineHeight:20}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</Text>
            </View>
            <View style={[styles.content,{padding:20}]}>
                <Text  style={{color:colors.text,flex:1}}>JOINED NOVEMBER 2021</Text>
            </View>
    </ScrollView>
);

}


export default First;


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding:30
},
img:
{
    marginLeft:110,
    flex:1,
    marginTop:10
},
content:
{
    flex:1,
    flexDirection:'column',
    // borderBottomColor:'red',
    borderBottomWidth:1,
    borderStyle:'dashed',

},
menu:
{
    marginLeft:300,
},
mynft:
{
    backgroundColor:"white",
    padding:10,
    borderRadius:4,
    elevation:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20.
},
mybook:
{
    marginBottom:20,
    padding:10,
    borderRadius:6,
},
contentt:
{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}
});
