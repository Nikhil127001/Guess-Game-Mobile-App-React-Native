import {View, Text, StyleSheet, TextInput, Alert} from 'react-native'
import ButtonComponent from '../Components/ButtonComponent';
function HomeScreenPage({setNumber , number,reset,confirm}){
    
   
   return(
    <>
    <View style = {styles.textCont}><Text style = {styles.textt}>Guess The Number Game</Text></View>
    <View style = {styles.container}>
        <Text style = {styles.text}>Enter The Number</Text>
        <TextInput style = {styles.textInput} maxLength={2} keyboardType='number-pad'
        value={number} onChangeText={num => setNumber(num)} ></TextInput> 
        <View style = {styles.buttonContainer}>
        <ButtonComponent contains={'Reset'} perform={reset}>Reset</ButtonComponent>
        <ButtonComponent contains={'Confirm'} perform = {confirm}>Confirm</ButtonComponent>
        </View>
        </View>
    </>
   );
}

export default HomeScreenPage;

const styles = StyleSheet.create({
    container : {
        width : '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 20,

    },
    textInput: {
        borderWidth: 3,
        borderColor: 'purple',  
        fontSize: 60,
        color : 'purple',
        width : 87,
        height : 80,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color : 'purple',
        marginVertical: 15
    },
    buttonContainer:{
        flexDirection: 'row',
        opacity: 1
    }, textt : {
        paddingVertical: 60,
        fontSize: 30,
        color : 'white',
        fontWeight: 'bold'
    
      }
})