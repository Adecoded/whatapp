import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { Entypo, FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const DetailScreen = ({ navigation, route }) => {
  const card = route.params;

  return (
    <View style={{ backgroundColor: "white", margin: 20, top: 12 }}>
      <ImageBackground
        source={card.image}
        imageStyle={{ width: 374, height: 319, borderRadius: 15 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              width: 34,
              height: 34,
              backgroundColor: "rgba(0, 0, 0, 0.24)",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
            onPress={navigation.goBack}
          >
            <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 34,
              height: 34,
              backgroundColor: "rgba(0, 0, 0, 0.24)",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
          >
            <FontAwesome5 name="bookmark" size={18} color="white" />
          </TouchableOpacity>
        </View>
        {/* Details Component */}
        <View style={{justifyContent:'flex-end',top:Height/5,marginLeft:10}}>
          <Text style={{color:'white',fontSize:22,fontFamily:'BoldRaleway',marginBottom:10}}>{card.name}</Text>
          <Text style={{color:'white',fontSize:14,fontFamily:'BoldRaleway',marginBottom:20}}>{card.agent},{card.name}</Text>

          <View style={{ flexDirection: "row"}}>
            <View style={{ flexDirection: "row" }}>
              <View style={{flexDirection:'row',height:28,width:28,borderRadius:10,backgroundColor:'rgba(0, 0, 0, 0.24)'}}>
              <FontAwesome name="bath" size={24} color="white" />
              <Text>{card.room}</Text>
              </View>
              <View style={{flexDirection:'row',height:28,width:28,borderRadius:10,backgroundColor:'rgba(0, 0, 0, 0.24)'}}>
              <MaterialCommunityIcons name="bed" size={24} color="white" />
                <Text>{card.bathroom}</Text>
              </View>
            </View>
          
            </View>
          </View>
      </ImageBackground>
    </View>
  );
};
export default DetailScreen;
