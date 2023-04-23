
const { View, Text, StyleSheet ,TouchableOpacity} = require("react-native");

const CustomTabButton=(props)=>
{
    const {children, accessibilityState ,onPress} =props;
    if(accessibilityState.selected)
    {
        return(
            <View style={styles.btnWrapper}>
            <TouchableOpacity onPress={onPress} style={styles.activebutton}>
                            <Text>{children}</Text>
                        </TouchableOpacity>
            </View>
        );
    }else{
    return(
        <TouchableOpacity onPress={onPress} style={styles.inactivebutton}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );}
};
export default CustomTabButton;
const styles = StyleSheet.create({
    btnWrapper:{
        flex:1,
        alignItems:'center',

    },
    activebutton:
    {
        flex:1,
        position:'absolute',
        width:50,
        height:50,
        borderRadius:50 /2,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center'

    },
    inactivebutton:{
        flex:1,
        backgroundColor:'#FFFFFF',
    }
})