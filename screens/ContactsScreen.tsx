import * as React from 'react';
import { FlatList ,StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';
import users from "../data/Users";
import NewMessageButton from '../components/NewMessageButton';
import Colors from '../constants/Colors';




export default function ChatRoomScreen() {
 

  return (
    <View style={styles.container}>
      <FlatList 
      data={users}
      renderItem={({item})=> <ContactListItem user={item}/>
      }
      keyExtractor={item=>item.id}
      />
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
    color: Colors.light.tint,
  }
});