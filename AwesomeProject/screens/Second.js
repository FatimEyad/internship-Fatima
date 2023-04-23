import {Text, View} from 'react-native'
import { useTheme } from "../src/theme/ThemeProvider";
import Icon from 'react-native-vector-icons/Ionicons';

function Second({navigation})
{
    const {dark, colors,setScheme}=useTheme();

    return(
        <View style={{flex:1,backgroundColor:colors.primary,padding:40}}>
            <View style={{backgroundColor:'#fdedd4',borderRadius:4,padding:20}}>
                <Text style={{color:colors.text,fontFamily:'Roboto-Black'}}>NOTE:</Text>
                <Text  style={{color:colors.text,fontFamily:'Roboto-Black',lineHeight:20}}>Please connect the wallet to see your portfolio and fortess dao assets.</Text>
            </View>
            <View style={{padding:20}}>
            <View style={{flexDirection:'row',marginBottom:20}}>
            <Icon style={{color:colors.text}} name="person-outline" size={22}/>
                <Text  style={{color:colors.text ,marginLeft:10,fontSize:20 ,fontFamily:'Roboto-Black'}}>Portfolio</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:20}}>
            <Icon style={{color:colors.text}} name="battery-charging-outline" size={22}/>
                <Text  style={{color:colors.text,marginLeft:10,fontSize:20 ,fontFamily:'Roboto-Black'}}>Fund Dashboard</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:20}}>
            <Icon style={{color:colors.text}} name="flash-outline" size={22}/>
                <Text  style={{color:colors.text,marginLeft:10,fontSize:20 ,fontFamily:'Roboto-Black'}}>Deals</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:20}}>
            <Icon style={{color:colors.text}} name="compass-outline" size={22}/>
                <Text  style={{color:colors.text,marginLeft:10,fontSize:20 ,fontFamily:'Roboto-Black'}}>White paper</Text>
            </View>
            </View>


        </View>
    );
}
export default Second;