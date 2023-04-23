import {Button, Pressable, Text, View} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function Setting({navigation})
{

    return(
        <View>
        <FontAwesome name="user"/>
            <Text>from Setting</Text>
            <Button 
            title='click hire'
            onPress={()=> navigation.navigate('Setting')}
            />
        </View>
    );
}
export default Setting;