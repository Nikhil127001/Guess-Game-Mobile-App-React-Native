import { Pressable, StyleSheet, Text,View } from "react-native";

function ButtonComponent({contains, perform}){
    return(
           <View style = {styles.ButtonOuter}>
             <Pressable style = {styles.ButtonInner} onPress={perform} android_ripple={{color: 'white', width: 50}}>
            <Text style={styles.ButtonText}>{contains}</Text>
        </Pressable>
           </View>
    );
}

export default ButtonComponent;

const styles = StyleSheet.create({
    ButtonOuter: {
        backgroundColor: 'purple',
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 15,
        elevation: 6,
        width : 150,
        alignItems: 'center',
        overflow: 'hidden',
    },
    ButtonInner: {
        width : '100%',
        alignItems: 'center',
        overflow: 'hidden',
    },
    ButtonText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})