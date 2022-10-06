import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,useDrawerProgress } from '@react-navigation/drawer'
import HomeScreen from '../screen/HomeScreen';
import Icon from '@expo/vector-icons/Ionicons'; 
import Iconw from '@expo/vector-icons/SimpleLineIcons'; 
import Iconx from '@expo/vector-icons/AntDesign'; 
import Animated from 'react-native-reanimated';

const Separator = () => <View style={{width:160,height:1,backgroundColor:'white'}} />; 


const CustomDrawerComponent =(props) =>{
    return(
        <DrawerContentScrollView style={{paddingVertical:30,paddingTop:110}}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
};

const DrawerScreenContainer =({children}) =>{
    const progress =useDrawerProgress();
    const scale = Animated.interpolateNode(progress.value,{
        inputRange:[0,1],
        outputRange:[1,0.8]
    });
    const borderRadius = Animated.interpolateNode(progress.value,{
        inputRange:[0,1],
        outputRange:[0,25]
    });
    return(
        <Animated.View 
        style=
        {{backgroundColor:'white'
        ,flex:1,transform:[{scale}],
        overflow:'hidden',
        borderRadius,
        }}>
        {children}
        </Animated.View>
    )
}

export default function DrawerNavigation() {
const Drawer =createDrawerNavigator();

  return (
   <Drawer.Navigator screenOptions={{
    headerShown:false,
   drawerType:'slide',
   drawerStyle:{
    width: 200,
      backgroundColor:'#0A8ED9'
   },
   overlayColor:null,

   sceneContainerStyle:{
    backgroundColor:'#0A8ED9'
   },
   drawerInactiveBackgroundColor:'#0A8ED9',
   drawerActiveBackgroundColor:'white',
   drawerActiveTintColor:'#0A8ED9',
   drawerInactiveTintColor:'white',
   drawerItemStyle:{borderTopRightRadius:20,borderBottomRightRadius:20,left:-8,width:190,height:40,marginBottom:8},
   drawerLabelStyle:{
    fontWeight:'bold'
   }
   }}
   drawerContent={props =><CustomDrawerComponent {...props}/>}
   >
    <Drawer.Screen name='Home' options={{title:'Home',drawerIcon:({color}) =><Iconx name='home' size={24} color={color} style={{marginRight:-12,marginLeft:12,}}/>}}>
    {({props}) => <DrawerScreenContainer>
    
        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>

    <Drawer.Screen name='Profile' options={{title:'Profile',drawerIcon:({color}) =><Icon name='person-outline' size={23} color={color} style={{marginRight:-12,marginLeft:12}}/>}}>
    {({props}) => <DrawerScreenContainer>
        <HomeScreen {...props}/>
        <Separator/>
    </DrawerScreenContainer>}
    
    </Drawer.Screen>

    <Drawer.Screen name='Nearby' options={{title:'Nearby',drawerIcon:({color}) =><Icon name='location-outline' size={24} color={color} style={{marginRight:-12,marginLeft:12}}/>}}>

    {({props}) => <DrawerScreenContainer>
        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>

    <Drawer.Screen name='Bookmark' options={{title:'Bookmark',drawerIcon:({color}) =><Icon name='bookmark-outline' size={23} color={color} style={{marginRight:-12,marginLeft:12}}/>}} >
    {({props}) => <DrawerScreenContainer>

        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>

    <Drawer.Screen name='Notification' options={{title:'Notification',drawerIcon:({color}) =><Icon name='md-notifications-outline' size={23} color={color} style={{marginRight:-12,marginLeft:12}}/>}}>
    {({props}) => <DrawerScreenContainer >
        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>

    <Drawer.Screen name='Message' options={{title:'Message',drawerIcon:({color}) =><Icon name='ios-chatbubble-outline' size={23} color={color} style={{marginRight:-12,marginLeft:12}}/>}}>
    {({props}) => <DrawerScreenContainer>
        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>

    <Drawer.Screen name='Setting' options={{title:'Setting',drawerIcon:({color}) =><Iconw name='settings' size={23} color={color} style={{marginRight:-12,marginLeft:12}}/>}}>
    {({props}) => <DrawerScreenContainer>
        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>

    <Drawer.Screen name='Help' options={{title:'Help',drawerIcon:({color}) =><Icon name='ios-help-circle-outline' size={24} color={color} style={{marginRight:-12,marginLeft:12}}/>}}>
    {({props}) => <DrawerScreenContainer>
        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>

    <Drawer.Screen name='Logout' options={{title:'Logout',drawerIcon:({color}) =><Icon name='power-outline' size={24} color={color} style={{marginRight:-12,marginLeft:12}}/>}}>
    {({props}) => <DrawerScreenContainer>
        <HomeScreen {...props}/>
    </DrawerScreenContainer>}
    </Drawer.Screen>
   </Drawer.Navigator>
  )
}