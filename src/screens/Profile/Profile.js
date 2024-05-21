import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Profile = () => {
  return (
    <View style={styles.continer}>
      <Text>Profile</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
});

export default Profile;