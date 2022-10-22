import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'

export default function NotImplemented() {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>Not Implemented</Text>
    <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'}}/>
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
flex:1,
alignItems:'center',
justifyContent:'center',
    },
    image:{
        width:'80%',
        aspectRatio:2/1,
    },
    text:{
fontSize:18,
fontWeight:'500',
color:'gray',
    }
})
