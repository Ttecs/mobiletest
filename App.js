// In App.js in a new project


// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './Screens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import AuthContext from './components/context'
import MainTabScreen from './Screens/MainTabScreen'
import SupportScreen from './Screens/SupportScreen';
import SettingsScreen from './Screens/SettingsScreen';
import BookmarkScreen from './Screens/BookmarkScreen';
import DrawerContent from './Screens/DrawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
 
function App() {
  // const [isLoading,setIsLoading]=React.useState(true);
  // const [userToken,setUserToken]=React.useState(null);
  
const initialLoginState={
   isLoading:true,
   userName:null,
   userToken:null

 };
  
 const loginReducer=(prevState,action)=>{
   switch(action.type){
     case 'RETRIVE_TOKEN':
       return{
         ...prevState,
         userToken:action.token,
         isLoading:false,
       };
       case 'LOGIN':
       return{
         ...prevState,
         userName:action.id,
         userToken:action.token,
         isLoading:false
       };
       case 'LOGOUT':
       return{
         ...prevState,
         userName:null,
         userToken:null,
         isLoading:false
       };
       case 'REGISTER':
       return{
         ...prevState,
         userName:action.id,
         userToken:action.token,
         isLoading:false

       };
   }

 };
 const[loginState,dispatch]=React.useReducer(loginReducer,initialLoginState)

  const authContext=React.useMemo(()=>({
    signIn:async(userName,password)=>{
      // setUserToken('false');
      // setIsLoading(false);
      let userToken;
      userToken=null;
      if(userName ==='user' && password==='pass'){
        
        try {
          userToken='fksjf';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      }
      console.log('user token',userToken);
      dispatch({type:'LOGIN', id: userName,token: userToken});
    },
    signOut:async()=>{
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type:'LOGOUT'});
    },
    signUp:()=>{
      //setUserToken('fksjf');
      // setIsLoading(false);
    }
  }),[]);
  React.useEffect(() => {
    setTimeout(async() =>{
      // setIsLoading(false);
      let userToken;
      userToken=null;
      try {
       userToken= await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }
      console.log('user token',userToken);
      dispatch({type:'REGISTER', token:userToken});
    },1000);
    
  }, [])

  if (loginState.isLoading){
    return(
      <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginState.userToken !== null ?(
   
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
       <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator> )
     : <RootStackScreen/>
     }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;