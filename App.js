// In App.js in a new project


// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/Maintabscreen';

import PageScreen from './Screens/PageScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Drawer = createDrawerNavigator();










function App() {
  return (
    <NavigationContainer>
    
     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Details" component={DetailStackScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;