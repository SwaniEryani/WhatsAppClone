/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: String;
  Chats: String;
  Status: String;
  Calls: String;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User ={
  id: String;
  name: String;
  imageUri: String;
}

export type Message={
  id: String;
  content: String;
  createdAt: number;
}
export type ChatRoom={
  id: String;
  users:[User];
  lastMessage: Message;
}