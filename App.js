import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Navigator from './src/Navigator'

function App() {
  return (
   <View style={{flex:1,justifyContent:'center',backgroundColor:'whitesmoke'}} >
    <Navigator/>
 <StatusBar/>
   </View>
  )
}

export default App
