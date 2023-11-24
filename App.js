import {View, StyleSheet,Text, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import HomeScreenPage from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import { useEffect, useState } from 'react';
export default function App() {
  const [screenYouWant , setScreenYouWant] = useState('HomeScreen');
  const [number , setNumber] = useState(null);
  const [count , setcount] = useState(0);
  const reset = () => {
    setNumber('');
}

const confirm = () => {
    if(!number){
        Alert.alert('Input Required', 'Please Enter a Number To Continue',[
            {text : 'Okey',
            style: 'cancel'
        }
        ])
    }else{
        setScreenYouWant('GameScreen')
    }
}

useEffect(() => {
  if(screenYouWant == 'HomeScreen'){
    setNumber(null);
    setcount(0);
  }
},[screenYouWant])
  return (
    <LinearGradient style = {styles.background} colors={['#034424' , '#EBBF5C']}>
      <ImageBackground style = {styles.container} imageStyle = {styles.backgroundImage} source={require('./assets/Images/bgImage.jpg')} resizeMode='cover'>
      {screenYouWant == 'HomeScreen' ? <HomeScreenPage setScreenYouWant = {setScreenYouWant} setNumber = {setNumber} number = {number} reset={reset} confirm={confirm}/> : screenYouWant == 'GameScreen' ? 
      <GameScreen setScreenYouWant = {setScreenYouWant} number = {number} setcount={setcount}  count = {count} />:
     <GameOverScreen count  = {count} number = {number} setScreenYouWant = {setScreenYouWant}/>}
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backgroundImage:{
      flex: 1,
      opacity : 0.4
  },
  background: {
    flex: 1,

  },
 
});
