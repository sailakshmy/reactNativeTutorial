import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';
import Card from './Card';

const LikeItProjectComponent = () => {
  return (
    <View style={styles.container}>
        <Header/>
        <ScrollView style={styles.body}>
            <Card image={require('../../assets/pic-1.jpg')} liked/>
            <Card image={require('../../assets/pic-2.jpg')} />
            <Card image={require('../../assets/pic-3.jpg')} liked/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#D0CEE2',
        marginTop: 20,
    },
    body:{
        flex:1,
        backgroundColor:'#EEEEEE'
    }
})

export default LikeItProjectComponent
