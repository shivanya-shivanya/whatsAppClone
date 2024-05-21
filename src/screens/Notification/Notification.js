import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <View style={styles.continer}>
      <Text>Notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    continer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
    }
  });