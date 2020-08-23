import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const AboutUs = () => {
  return (
    <View style={styles.container}>
    <Text>This is the About Us Page</Text>
  </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
