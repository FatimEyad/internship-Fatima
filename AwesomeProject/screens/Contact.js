import {Button, TouchableOpacity, Text, View} from 'react-native'
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from "../src/theme/ThemeProvider";

function Contact({navigation})
{
    const {dark, colors,setScheme}=useTheme();

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:colors.primary}} >
            <View style={{backgroundColor:"#D6D1CD",padding:50,elevation:5,borderRadius:5}}>
                <Text style={{color:colors.text,fontFamily:'Roboto-Black',marginBottom:10}}>CONNECT WALLET</Text>
                <Text style={{color:colors.text,lineHeight:20}}>By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.

</Text>

            </View>
        </View>

    );
}
export default Contact;