import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import navigationStrings from '../../Navigations/navigationStrings';

const InitialScreen = ({navigation}) => {
  return (
    <View style={styles.continer}>
      <Text onPress={() => navigation.navigate(navigationStrings.LOGIN)} >InitialScreen </Text>
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

export default InitialScreen