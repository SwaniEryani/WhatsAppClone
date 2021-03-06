import * as React from 'react';
import { FlatList ,StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListitem from '../components/ChatlistItem';
import chatRooms from "../data/ChatRooms";
import NewMessageButton from '../components/NewMessageButton';
import Colors from '../constants/Colors';


export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={chatRooms}
      renderItem={({item})=> <ChatListitem chatRoom={item}/>
      }
      keyExtractor={item=>item.id}/>
     <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
  }
});
