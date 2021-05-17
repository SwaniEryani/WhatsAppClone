import { format } from "prettier";
import React from "react";
import styles from "./style";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { User } from "../../types";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
  user: User;
};

export default function ContactListItem(props: ContactListItemProps) {
  const { user } = props;

  const navigation = useNavigation();
  

  const onClick = () => {
    // navigation.navigate("ChatRoom", {
    //   id: chatRoom.id,
    //   name: user.name,
    //   image: user.imageUri,
    // });
  };
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text>{user.name}</Text>
            <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
