import { View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const BarNames = [
  {
    id: "1",
    name: "House",
  },
  {
    id: "2",
    name: "Apartment",
  },
  {
    id: "3",
    name: "Hotel",
  },
  {
    id: "4",
    name: "Villa",
  },
];

const Rentals = [
  {
    id: '1',
    name: 'Dreamsville House',
    agent: 'Jl. Sultan Iskandar Muda',
    location: '1.9 km',
    image: require('../assets/home.png'),
    price: '$ 250,000,000/Year',
    room: '6 Bedroom',
    bathroom: '4 Bathroom',
    imageProfile: require('../assets/person.png'),
    descriptions:'The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars...'
  },
  {
    id: '2',
    name: 'Ascot House',
    agent: 'Jl. Cilandak Tengah',
    location: '2.8 km',
    image: require('../assets/home3.png'),
    price: '$ 230,000,000/Year',
    room: '3 Bedroom',
    bathroom: '3 Bathroom',
    imageProfile: require('../assets/person.png'),
    descriptions:'The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars... '

  },
  {
    id: '3',
    name: 'Orchad House',
    agent: 'JGarry Allen',
    location: '11.2 km',
    image: require('../assets/home1.png'),
    price: '$ 450,000,000/Year',
    room: '12 Bedroom',
    bathroom: '6 Bathroom',
    imageProfile: require('../assets/person.png'),
    descriptions:'The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars...'
   

  },
  {
    id: '4',
    name: 'The Hollies House',
    agent: 'Jl. Sultan Iskandar Muda',
    location: '7.1 km',
    image: require('../assets/sitting.png'),
    imageProfile: require('../assets/person.png'),
    price: '$ 200,000,000/Year',
    room: '2 Bedroom',
    bathroom: '2 Bathroom',
    descriptions:'The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars... '

  },
]
const Card = ({ card }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
      <View style={{ width: 74, height: 70, backgroundColor: 'gray', borderRadius: 10 }}>
        <Image source={card.image} style={{ width: 74, height: 70, borderRadius: 10 }} resizeMode='cover' />
      </View>

      <View style={{ width: 231, height: 70, flex: 1, paddingLeft: 20, paddingTop: 7 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 19, fontFamily: 'BoldRaleway', marginBottom: 8 }}>{card.name}</Text>
        <Text style={{ fontSize: 12, lineHeight: 14, color: '#0A8ED9', marginBottom: 8 }}>{card.price}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome name="bed" size={12} color="#858585" />
            <Text style={{ fontSize: 12, lineHeight: 14, color: '#858585', marginBottom: 8, marginLeft: 5 }}>{card.room}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 12 }}>
            <FontAwesome name="bathtub" size={12} color="#858585" />
            <Text style={{ fontSize: 12, lineHeight: 14, color: '#858585', marginLeft: 5 }}>{card.bathroom}</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
};

const MainCard = ({ card }) => {
  const navigation = useNavigation()
  const pressed = () => {
    navigation.navigate('Detail', card)
  }
  return (
    <TouchableOpacity style={{ width: 220, height: 272, borderRadius: 10, margin: 15, backgroundColor: '#0D0D0D00', top: 12 }} onPress={pressed}>
      {/* card */}
      <ImageBackground source={card.image} style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 15 }}>
        <View style={{ width: 73, height: 24, borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.24)', alignSelf: 'flex-end', margin: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', }}>
          <Icon name='location-outline' color='white' size={15} />
          <Text style={{ color: 'white', fontFamily: 'BoldRaleway', marginLeft: 2 }}>{card.location}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', bottom: 30, marginLeft: 20 }}>
          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'BoldRaleway', fontWeight: '500', lineHeight: 19 }}>{card.name}</Text>
          <Text style={{ marginTop: 10, color: 'white', fontSize: 13, fontFamily: 'BoldRaleway', fontWeight: '500', lineHeight: 19 }}>{card.agent}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default function HomeScreen() {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [fontsLoaded] = useFonts({
    'BoldRaleway': require('../assets/static/Raleway-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style={{ top: 12, flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 12, marginRight: 12 }}>

        {/** Location */}
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontFamily: 'BoldRaleway', color: '#838383', fontSize: 14, lineHeight: 15 }}>Location</Text>

          <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'BoldRaleway', fontSize: 20, lineHeight: 23.5, color: '#000000' }}>Jakarta</Text>
            <Entypo name="chevron-down" size={24} color="#838383" style={{ left: 5 }} />
          </View>
        </View>


        {/** Notification icon */}
        <View>
          <MaterialIcons name="notifications-none" size={28} color="black" />
          <View style={{ width: 10, height: 10, backgroundColor: '#FA0E0E', borderRadius: 30, position: 'absolute', left: 14, top: 5 }} />
        </View>
      </View>


      {/** Search Component */}
      <View style={{ flexDirection: 'row', marginTop: 38, marginBottom: 20 }}>
        <View style={{ marginLeft: 22 }}>
          <View style={{ width: 299, paddingHorizontal: 22, paddingVertical: 14, alignItems: 'center', flexDirection: 'row', backgroundColor: '#F7F7F7', borderRadius: 10 }}>
            <Octicons name="search" size={23} color="#838383" style={{ marginRight: 12 }} />
            <TextInput placeholder='Search address, or near you ' style={{ fontSize: 13, fontFamily: 'BoldRaleway', lineHeight: 14, }} />
          </View>
        </View>
        {/** Sort Component */}
        <LinearGradient colors={['#A0DAFB', '#0A8ED9']} style={{ height: 50, width: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center', left: 12 }}>
          <MaterialCommunityIcons name="tune" size={24} color="white" />
        </LinearGradient>
      </View>

      {/** slide  Component */}

      <ScrollView contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, marginLeft: 12 }} horizontal showsHorizontalScrollIndicator='false'>
        {BarNames.map((item, index) => (
          <View style={{ marginHorizontal: 12, marginVertical: 12 }} >
            <TouchableOpacity style={{
              backgroundColor: selectedCategoryIndex == index ? '#0A8ED9' : '#F7F7F7',
              height: 40,
              width: 82,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
              borderRadius: 10,
            }}
              key={index}
              onPress={() => setSeletedCategoryIndex(index)}>
              <Text style={{ color: selectedCategoryIndex == index ? 'white' : '#858585', fontFamily: 'BoldRaleway' }}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/** Card  Component */}
      <ScrollView>
        <View style={{ top: 27, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 25 }}>
          <Text style={{ color: '#000000', fontSize: 20, }}>Near from you</Text>

          <Text style={{ color: '#858585', fontSize: 12, }}>See more</Text>
        </View>

        <ScrollView contentContainerStyle={{ marginBottom: 50 }}>
          <View style={{ top: 12 }}>
            <FlatList

              data={Rentals}
              renderItem={({ item }) => <MainCard card={item} />
              }
              keyExtractor={(item) => item.id}

              horizontal
              showsHorizontalScrollIndicator='false'
            />
          </View>
          <View style={{ top: 27, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 25 }}>
            <Text style={{ color: '#000000', fontSize: 20, }}>Best for you</Text>
            <Text style={{ color: '#858585', fontSize: 12, }}>See more</Text>
          </View>



          <FlatList
            data={Rentals}
            renderItem={({ item }) => <Card card={item} />
            }
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}
