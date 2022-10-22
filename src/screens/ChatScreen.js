import React, { useEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBut";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function ChatScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.Bg}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 62 :90}
    >
      <ImageBackground source={Bg} style={styles.Bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  Bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
