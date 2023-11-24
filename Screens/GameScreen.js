import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Alert } from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import { useEffect, useMemo, useState } from 'react';

function GameScreen({ setScreenYouWant, number, setcount  , count}) {

    const [randomNumber, setRandomNumber] = useState('');
    const [min, setmin] = useState(1);
    const [max, setmax] = useState(100);
    const [guesses, setGuesses] = useState([]);

    const findRandomNumber = () => {
        const RandomNumber = Math.floor(Math.random() * (max - min)) + min;
        setRandomNumber(RandomNumber);
        if (RandomNumber == number) {
             setScreenYouWant('GameOverScreen');
             return;
        }
        setGuesses([...guesses, RandomNumber]);
        console.log(min);
        console.log(max + '----------')

    }


    const greater = () => {
        if (number < randomNumber) {
            Alert.alert('Please Dont lie', 'you know that you are telling a lie')
        } else {
            setmin(guesses[guesses.length - 1]+1);
            setcount(count +1)

        }
    }

    const lesser = () => {
        if (number > randomNumber) {
            Alert.alert('Please Dont lie', 'you know that you are telling a lie')
        } else {
            setmax(guesses[guesses.length - 1] -1);
            setcount(count +1)
        }
    }
    useEffect(() => {
        findRandomNumber();
    }, [max, min]);

    return (
        <View style={styles.constainer}>
            <View style={styles.textconstainer}><Text style={styles.heading}>Machine's Guess</Text></View>
            <View style={styles.textconstainer2}><Text style={styles.heading}>{guesses[guesses.length - 1]}</Text></View>
            <View style={styles.buttonContainer}>
                <ButtonComponent contains={'+'} perform={greater}>+</ButtonComponent>
                <ButtonComponent contains={'-'} perform={lesser}>-</ButtonComponent>
            </View>
            <ScrollView style={styles.containerGuesses} contentContainerStyle={{ alignItems: 'center' }}>
                {guesses.map((item, idx) => (
                    <View key={idx} style={styles.containerGuesses2}>
                        <Text  style={styles.text}>Machine's Guess {idx + 1} :  {item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    );
}
export default GameScreen;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    textconstainer: {
        borderWidth: 3,
        marginTop: 40,
        width: '90%',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30
    },
    textconstainer2: {
        borderWidth: 3,
        marginTop: 40,
        width: '90%',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 80
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',

    }, buttonContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginVertical: 5,
        fontWeight: '600',
    },
    containerGuesses: {
        width: '90%',
    },
    containerGuesses2: {
        width: '90%',
        backgroundColor: 'white',
        marginBottom: 5,
        alignItems: 'center',
        opacity: 0.8
    }
})