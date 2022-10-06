import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const ImgBack = [
  {
    id: "1",
    img: require("../assets/home.png"),
  },
  {
    id: "2",
    img: require("../assets/home1.png"),
  },
  {
    id: "3",
    img: require("../assets/home3.png"),
  },
  {
    id: "4",
    img: require("../assets/bed.png"),
  },
];

const DetailScreen = ({ navigation, route }) => {
  const card = route.params;

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: Height/11 }} showsVerticalScrollIndicator='false'>
        <View
          style={{
            backgroundColor: "white",
            margin: 20,
            top: 12,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <ImageBackground
            source={card.image}
            imageStyle={{ width: 374, height: 319, borderRadius: 15 }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
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
            <View
              style={{
                justifyContent: "flex-end",
                top: Height / 4.8,
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontFamily: "BoldRaleway",
                  marginBottom: 10,
                }}
              >
                {card.name}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "BoldRaleway",
                  marginBottom: 20,
                }}
              >
                {card.agent},{card.name}
              </Text>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 28,
                        width: 28,
                        borderRadius: 6,
                        backgroundColor: "#C0C0C0c0",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesome name="bath" size={16} color="white" />
                    </View>
                    <Text
                      style={{
                        marginLeft: 12,
                        lineHeight: 14,
                        fontSize: 14,
                        fontFamily: "BoldRaleway",
                        color: "white",
                      }}
                    >
                      {card.room}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 20,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 28,
                        width: 28,
                        borderRadius: 6,
                        backgroundColor: "#C0C0C0c0",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="bed"
                        size={16}
                        color="white"
                      />
                    </View>

                    <Text
                      style={{
                        marginLeft: 12,
                        lineHeight: 14,
                        fontSize: 14,
                        fontFamily: "BoldRaleway",
                        color: "white",
                      }}
                    >
                      {card.bathroom}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* Descriptions */}

        <View style={{ marginTop: Height / 4, marginLeft: 22 }}>
          <Text
            style={{ fontSize: 18, lineHeight: 20, fontFamily: "BoldRaleway" }}
          >
            Description
          </Text>

          <View style={{ marginTop: 22, marginBottom: 22 }}>
            <Text
              style={{
                lineHeight: 18,
                fontFamily: "BoldRaleway",
                fontSize: 16,
                color: "#858585",
              }}
            >
              {card.descriptions}{" "}
              <Text style={{ color: "#0A8ED9" }}>Show More</Text>
            </Text>
          </View>
        </View>

        {/* personal details */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity style={{ width: 60, height: 60 }}>
            <Image
              source={card.imageProfile}
              style={{ width: "100%", height: "100%", borderRadius: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View
            style={{
              width: 331,
              height: 40,
              flex: 1,
              marginLeft: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "BoldRaleway",
                marginBottom: 5,
              }}
            >
              Garry Allen
            </Text>
            <Text
              style={{
                color: "#858585",
                fontSize: 14,
                fontFamily: "BoldRaleway",
              }}
            >
              Owner
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: 20,
                margin: -22,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  backgroundColor: "#A0DAFB",
                  marginRight: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="call" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  backgroundColor: "#A0DAFB",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="chatbubble" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ margin: 20, marginTop: 30 }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 20,
                fontFamily: "BoldRaleway",
              }}
            >
              Gallery
            </Text>
          </View>

          <View>
            <FlatList
              data={ImgBack}
              renderItem={({ item }) => (
                <TouchableOpacity style={{ marginTop: 22 }}>
                  <Image
                    source={item.img}
                    style={{
                      width: 82,
                      height: 82,
                      marginLeft: 12,
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator="false"
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <View style={{}}>
          <ImageBackground
            source={require("../assets/map.png")}
            imageStyle={{
              width: 375,
              height: 161,
              alignSelf: "center",
              justifyContent: "center",
              marginLeft: 20,
              borderRadius: 16,
            }}
          >
            <View style={{flexDirection:'row',top:Height/8,justifyContent:'space-between',margin:40,height:50}}>
              <View>
                <Text style={{marginBottom:12,fontSize:16,color:'#858585',lineHeight:14,fontFamily:'BoldRaleway',top:8}}>Price</Text>
                <Text style={{fontSize:20,fontWeight:'600',lineHeight:20}}>{card.price}</Text>
              </View>
              <LinearGradient colors={['#A0DAFB','#0A8ED9']} style={{width:122,height:43,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Text style={{lineHeight:19,fontSize:18,fontWeight:'600',fontFamily:'BoldRaleway',color:'white'}}>Rent Now</Text>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};
export default DetailScreen;
