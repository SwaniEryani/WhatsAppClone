import { format } from "prettier";
import React from "react";
import styles from "./style";
import { View, Text ,Image } from "react-native";
import moment from 'moment';
import { ChatRoom } from "../../types";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};
export default function ChatListItem(props: ChatListItemProps) {
  const { chatRoom } = props;

  const user = chatRoom.users[1];
  return (
   
    <View style={styles.container}>
      <View style={styles.lefContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text>{user.name}</Text>
          <Text>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>

      <Text style={styles.time}>
          {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
    </View>
  );
}
