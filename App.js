import React from 'react'
import { Text, View } from 'react-native'
import ChatsScreen from './src/components/screens/ChatsScreen'


function App() {
  return (
   <View style={{flex:1,justifyContent:'center',paddingVertical:60}} >
 <ChatsScreen/>
   </View>
  )
}

export default App
