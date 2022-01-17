import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from './app/screens';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

const getFonts = ()=> Font.loadAsync({
  'roboto-black': require('./app/assets/fonts/Roboto-Black.ttf'),
  'roboto-black-italic': require('./app/assets/fonts/Roboto-BlackItalic.ttf'),
  'roboto-bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
  'roboto-boldItalic': require('./app/assets/fonts/Roboto-BoldItalic.ttf'),
  'roboto-Italic': require('./app/assets/fonts/Roboto-Italic.ttf'),
  'roboto-regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
  'roboto-thin': require('./app/assets/fonts/Roboto-Thin.ttf')
})

export default function App() {

  const [fontsLoaded, setFontsloaded] = useState(false)
  const Stack = createStackNavigator()

  if(fontsLoaded){
    return (
      <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
       </Stack.Navigator>
      </NavigationContainer>
     );
  }else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsloaded(true)}
        onError={()=>console.log('error')}
      />
    )
  }
  
}

const styles = StyleSheet.create({
  
});
