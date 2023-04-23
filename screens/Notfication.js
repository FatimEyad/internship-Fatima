import {Button, Pressable, StyleSheet,Text, View} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from "../src/theme/ThemeProvider";
import { Avatar } from 'react-native-paper';

function Notfication({navigation})
{
    const {dark, colors,setScheme}=useTheme();

    return(
        <View style={{padding:30,backgroundColor:colors.primary,flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:colors.text}}>Notification</Text>
                <Text style={{color:colors.text}}>Mark all as read</Text>
            </View>
            <View style={{paddingTop:20}}>
                <View style={{backgroundColor:'#D6D1CD',elevation:5,borderRadius:10}}>
                <View style={{flexDirection:'row',flexWrap:'wrap', alignItems:'center'}}>
                <Avatar.Image style={styles.img} size={70} source={require('../assets/images/aa.webp')} />
                <Text style={{marginLeft:10,color:colors.text}}>@dolcemariposa </Text>
                <Text style={{marginLeft:10,color:colors.text}}>followed you</Text>
                <Text style={{color:colors.text,marginLeft:110}}>Just Now</Text>

                </View>

                </View>
            </View>
            <View style={{paddingTop:20}}>
                <View style={{backgroundColor:'#D6D1CD',elevation:5,borderRadius:10}}>
                <View style={{flexDirection:'row',flexWrap:'wrap', alignItems:'center'}}>
                <Avatar.Image style={styles.img} size={70} source={require('../assets/images/aa.webp')} />
                <Text style={{marginLeft:10,color:colors.text}}>@dolcemariposa </Text>
                <Text style={{marginLeft:10,color:colors.text}}>followed you</Text>
                <Text style={{color:colors.text,marginLeft:110}}>Just Now</Text>

                </View>

                </View>
            </View>
            <View style={{paddingTop:20}}>
                <View style={{backgroundColor:'#D6D1CD',elevation:5,borderRadius:10}}>
                <View style={{flexDirection:'row',flexWrap:'wrap', alignItems:'center'}}>
                <Avatar.Image style={styles.img} size={70} source={require('../assets/images/aa.webp')} />
                <Text style={{marginLeft:10,color:colors.text}}>@dolcemariposa </Text>
                <Text style={{marginLeft:10,color:colors.text}}>followed you</Text>
                <Text style={{color:colors.text,marginLeft:110}}>Just Now</Text>

                </View>

                </View>
            </View>

        </View>
    );
}
export default Notfication;


const styles = StyleSheet.create({

img:
{
marginTop:30,
marginBottom:15,
marginHorizontal:20
}
});
