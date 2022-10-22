import React from 'react'
import ChatsScreen from '../screens/ChatsScreen'
import ChatScreen from '../screens/ChatScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import MainTabNavigator from './MainTabNavigator'
import ContactScreen from '../screens/Contact'
const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
 '<Stack.Navigator  screenOptions={{headerStyle:{backgrounColor:'whitesmoke'}}}>
    <Stack.Screen  name='Home' component={MainTabNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='Chats' component={ChatsScreen}/>
    <Stack.Screen name='Chat' component={ChatScreen}/>
    <Stack.Screen name='Contact' component={ContactScreen}/>
 </Stack.Navigator>
   </NavigationContainer>
  )
}
 