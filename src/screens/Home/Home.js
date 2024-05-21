import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
  ChatClient,
  ChatOptions,
  ChatMessageChatType,
  ChatMessage,
} from 'react-native-agora-chat';

const Home = () => {
  const title = 'AgoraChatQuickstart';
  const appKey = '61917100#1292338';
  
  return (
    <View style={styles.continer}>
      <Text>Home</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default Home