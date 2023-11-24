import LottieView from "lottie-react-native";
import { View,Text,Image,StyleSheet } from "react-native";
import ButtonComponent from "../Components/ButtonComponent";
 function GameOverScreen({count , number,setScreenYouWant}) {
    const Onclick = () => {
        setScreenYouWant('HomeScreen')
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.text2}> Game Over !!</Text>

            <Text style = {styles.text}> Congrats! You Won.       Your Machine Won this game in {count} rounds , and the Number is {number}</Text>
           <Image style = {styles.image} source={require('../assets/Images/Animation.gif')}/>
           <ButtonComponent perform={Onclick} contains={'Restart Game'}  >Restart</ButtonComponent>
        </View>
    );
 }


 export default GameOverScreen;

 const styles = StyleSheet.create({
    image : {
        height : 600,
        width : 300,
        position: 'absolute',
        marginTop: 100

    },
    text : {
        fontSize : 30,
        color: 'white',
        marginTop: 80,
    },
    text2 : {
        fontSize : 40,
        color: 'white',
        marginTop: 300,
        color : '#e07652',
        fontWeight: 'bold'
    },
    container : {
        flex: 1,
        width: '90%',
        alignItems: 'center',
    }
 })