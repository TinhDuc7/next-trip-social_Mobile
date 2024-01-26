import { View, Text } from 'react-native';
import React,{ useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide()
    }
    // SplashScreen.hide()
  },[])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App;