/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Fontisto } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, ChatParamList, ContactsParamList,
  TabTwoParamList } from '../types';
import ContactsScreen from '../screens/ContactsScreen';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background,
      style:{
        backgroundColor: Colors[colorScheme].tint,
      },
      indicatorStyle:{
        backgroundColor: Colors[colorScheme].background,
        height: 4,
      },
      lableStyle:{
        fontWeight:'bold'
      },
      showIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={ChatScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreenNavigator}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoNavigator}
       
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoNavigator}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChatStack = createStackNavigator<ChatParamList>();

function ChatScreenNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerTitle: 'Chats' }}
      />
    </ChatStack.Navigator>
  );
}

// const ContactsStack = createStackNavigator<ContactsParamList>();

// function ContactsScreenNavigator() {
//   return (
//     <ContactsStack.Navigator>
//       <ContactsStack.Screen
//         name="ContactsScreen"
//         component={ContactsScreen}
//         options={{ headerTitle: 'Contacts' }}
//       />
//     </ContactsStack.Navigator>
//   );
// }

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
