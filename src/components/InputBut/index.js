import React,{useState} from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign,MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InputBox() {

  const [newMessage,setNewMesasage] =useState('');
const Onsend =() =>{
  console.warn('Sending a new message:',newMessage);

  setNewMesasage('');
}

  return (
   <SafeAreaView edges={['bottom']} style={styles.container}>
{/**icon */}
<AntDesign name='plus' size={20} color='royalblue'/>
{/** text input*/}
<TextInput value={newMessage} onChangeText={setNewMesasage} style={styles.input} placeholder='type your message...'/>
{/** icon*/}
<MaterialIcons onPress={Onsend} style={styles.send} name='send' size={18} color='white'/>
   </SafeAreaView>
  )
}
const styles=StyleSheet.create({
container:{
flexDirection:'row',
backgroundColor:'whitesmoke',
padding:5,
paddingHorizontal:10,
alignItems:'center'
},
send:{
backgroundColor:'royalblue',
padding:7,
borderRadius:15,
overflow:'hidden'
},
input:{
flex:1,
backgroundColor:'white',
padding:10,
borderRadius:50,
paddingHorizontal:10,
marginHorizontal:10,


borderColor:'lightgray',
borderWidth:StyleSheet.hairlineWidth
}
})
