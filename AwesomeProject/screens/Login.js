import {Button, Pressable,ImageBackground,StyleSheet, Text, View} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Login({navigation})
{

    return(

    <ImageBackground source={require('../assets/images/flower.jpg')} style={styles.wellcome}>
        <Text style={{fontFamily:'Cookie-Regular', fontSize:50 ,color:'#391630'}}>WELLCOME</Text>

        <Pressable onPress={()=> navigation.navigate('Content')}>
            <Text style={{ fontFamily:'Cookie-Regular', fontSize:40,color:'#080506'}}>Login</Text>
        </Pressable> 
 
      </ImageBackground>
      
 
    );
}
export default Login;


const styles = StyleSheet.create({
    wellcome:
    {
      flex:1,
      color:"red",
      fontSize:100,
      justifyContent:'center',
      alignItems:'center'
      
    },
  
  });