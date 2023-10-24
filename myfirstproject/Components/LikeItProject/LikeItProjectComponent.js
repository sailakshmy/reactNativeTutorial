import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';
import Card from './Card';

const LikeItProjectComponent = () => {
    const imageData = [
        {
            id: 1,
            image: require('../../assets/pic-1.jpg'),
            liked: false,
        },
        {
            id: 2,
            image: require('../../assets/pic-2.jpg'),
            liked: false
        },
        {
            id: 3,
            image: require('../../assets/pic-3.jpg'),
            liked : false,
        }
    ];
    const [data, setData] = useState(imageData);
    const [likeCounter, setLikeCounter] = useState(0);
    useEffect(()=>{
        setLikeCounter(data.filter(d=>d.liked).length);
    },[data])
    const onLikeClick = (id) => {
        setData(data.map(d=>d.id===id ? {...d,liked:!d.liked}:d));
    }
  return (
    <View style={styles.container}>
        <Header likeCounter={likeCounter}/>
        <ScrollView style={styles.body}>
           {data.map(item=> <Card image={item.image} id={item.id} liked={item.liked} key={item.id} onClickLike={onLikeClick}/>)}
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
