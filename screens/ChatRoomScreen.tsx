import React from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import InputBox from '../components/InputBox';

import chatRoomData from "../data/chats";
import BG from "../assets/images/BG.png";


export default function ChatRoomScreen() {
  const route = useRoute();

  return (
    <ImageBackground source={BG} style={{ width: "100", height: "100" }}>
      <View>
        <FlatList
          data={chatRoomData.messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          inverted
        />
      </View>
      <InputBox/>
    </ImageBackground>
  );
}
