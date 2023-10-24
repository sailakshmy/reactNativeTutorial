import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({likeCounter}) => {
    return (
        <View style={styles.header}>
            <Text style={{ flex: 1, fontSize: 24 }}>Like It</Text>
            <FontAwesome name="heart" size={24} color="red" />
            <Text style={{ fontSize: 24, marginLeft: 5 }}>{likeCounter}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        backgroundColor: '#D0CEE2',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center'
    },
})

export default Header
