import React from "react";
import { Text, Image, StyleSheet, Pressable } from "react-native";

export default function ContactListItem({user}) {

  return (
    <Pressable style={styles.container}>
      <Image
        source={{uri:user.image}}
        style={styles.image}
      />
          <Text numberOfLines={1} style={styles.name}>
         { user.name}
          </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    marginRight: 10,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight:10
  },
  
  
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  
});
