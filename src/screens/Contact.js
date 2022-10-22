import React from 'react'
import { FlatList, Text, View } from 'react-native'
import chats from '../../assets/data/chats.json'
export default function ContactScreen() {
  return (
  <FlatList
    data={chats}
    renderItem={({item}) => <ContactScreen user={item.user}/>}
  />
  )
}
