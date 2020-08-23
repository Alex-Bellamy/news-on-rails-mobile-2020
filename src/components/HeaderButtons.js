import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const HeaderButtons = ({ navigation }) => {
  return (
    <View style={[styles.iconContainer, { flexDirection: 'row' }]}>
      <TouchableHighlight
        onPress={() => { navigation.navigate({ name: 'AboutUs' }) }}>
        <Ionicons name="md-information-circle-outline" size={28} color="grey" />
      </TouchableHighlight>
    </View>
  )
}

export default HeaderButtons

const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 20, paddingTop: 10, marginRight: 5
  }
})
