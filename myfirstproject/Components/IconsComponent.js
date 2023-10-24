import React from 'react';
import {Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import {View, Text, StyleSheet} from 'react-native';

const IconsComponent = () => {
  return (
    <View style={styles.iconContainer}>
      <FontAwesome name="font" size={24} color="black" />
      <Text>Icons Component</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Entypo name="aircraft" size={24} color="red" />
    </View>
  )
}
const styles = StyleSheet.create({
    iconContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    //   marginTop: 30
    }
  });
export default IconsComponent
