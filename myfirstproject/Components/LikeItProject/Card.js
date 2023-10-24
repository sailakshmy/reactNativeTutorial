import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Card = ({image, liked}) => {
  return (
    <View style={styles.card}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={image} style={styles.cardImage}/>
        </View>
      <View style={styles.cardFooter}>
        <Text style={[{flex: 1}, styles.cardActionButtons]}>Comment</Text>
        <Text style={[styles.cardActionButtons, {marginRight:5}]}>Like</Text>
        <FontAwesome name={liked?'heart':'heart-o'} size={16} color={liked?"red":'black' } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        height: 250,
        marginHorizontal: 30,
        marginVertical:30,
        borderRadius: 20,
        padding: 20
    },
    cardImage:{
        width: 260,
        height: 180,
        resizeMode:'contain',
        borderRadius: 20
    },
    cardFooter:{
        flexDirection: 'row',
        alignItems:'center',
        flex: 1,        
        paddingTop: 10
    },
    cardActionButtons:{
        fontSize: 16,
    }
})
export default Card
