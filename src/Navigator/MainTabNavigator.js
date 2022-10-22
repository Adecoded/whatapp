import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from '../screens/ChatsScreen';

import NotImplemented from '../screens/NotImplemented';
import { Entypo, Ionicons } from '@expo/vector-icons';

const Tab= createBottomTabNavigator();
export default function MainTabNavigator() {
  return (
  <Tab.Navigator screenOptions={{
    tabBarStyle: { backgroundColor: "whitesmoke" },
    headerStyle: { backgroundColor: "whitesmoke" },
  }}>
    <Tab.Screen name='Status' component={NotImplemented}  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="logo-whatsapp" size={size} color={color} />
    ),
  }}/>
    <Tab.Screen name='Calls' component={NotImplemented}  options={{
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="call-outline" size={size} color={color} />
    ),
  }}/>
    <Tab.Screen name='Camera' component={NotImplemented} options={{
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="camera-outline" size={size} color={color} />
    ),
  }}/>
    <Tab.Screen name='Chats' component={ChatsScreen}  options={({navigation})=>({
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
    ),
    headerRight:() =>( 
        <Entypo 
        onPress={() =>navigation.navigate('Contact')}
    name="new-message"
    size={18}
    color="royalblue"
    style={{ marginRight: 15}}
  /> )
  })}/>
    <Tab.Screen name='Settings' component={NotImplemented}  options={{
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="settings-outline" size={size} color={color} />
    ),
  }}/>
  </Tab.Navigator>
  )
}
