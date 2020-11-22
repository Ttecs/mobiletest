import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import SignInScreen from './SignInScreen';

const SplashScreen = ({navigation}) => {


    return (
     <View style={styles.container}>
        <View style={styles.header}>
           <Animatable.Image
               animation="bounce"
               duration="1500"
            style={styles.logo} source={require('../assets/logowhite.png')}
           resizeMode="contain"/>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.title}>Welcome to AlphaX SmartTravel</Text>
            <Text style={styles.text}>sign in with</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient colors={['#08d4c4','#01ab9d']} style={styles.signIn}>
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialCommunityIcons
                    name="chevron-right"
                    color={'#ffff'}
                    size={30}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
     </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

