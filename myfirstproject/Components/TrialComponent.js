import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function TrialComponent() {
    const [text, setText] = useState('');
    const [color, setColor] = useState('red');
    const handleOnPress = ()=>{
      setColor('blue');
    }
    return (
        //     {/* <Text style={{ color: 'red', backgroundColor: 'black', padding: 20, borderColor: 'blue', borderWidth: 2, borderRadius: 50 }}>Open up App.js to start working on your app! Hello!</Text> */ }
        //         {/* <Text style={{color:'blue', backgroundColor:'black', margin: 20}}>Open up App.js to start working on your app! Hello!</Text> */ }
        // {/* <TextInput placeholder='Enter a ' style={{width: 200, backgroundColor:'grey'}} />
        //   <TouchableOpacity>
        //     <Text>Click Me</Text>
        //   </TouchableOpacity> */}
        // {/* <View style={{
        //     backgroundColor:'red',
        //     width: 80,
        //     height: 80,
        //     borderRadius: 40
        //   }}>
        //   </View> */}
        // <View style={styles.container_two}>
        //     <View style={{
        //         backgroundColor: 'red',
        //         // width: 80,
        //         flex: 1,
        //         height: 80,
        //         // alignItems: 'center',
        //         justifyContent: 'center',
        //         // paddingTop: 20,
        //         padding: 10
        //     }}>
        //         <Text>Hi!!!!1</Text>
        //     </View>
        //     <View style={{
        //         backgroundColor: 'blue',
        //         // width:80,
        //         flex: 2,
        //         height: 80,
        //         // alignItems: 'center',
        //         justifyContent: 'center',
        //         // paddingTop: 20
        //         padding: 10
        //     }}>
        //         <Text>HELLLOOOO</Text>
        //     </View>
        //     <StatusBar style="auto" />
        // </View>
        <View>
            <Text>Hello World!</Text>
            <TextInput style={styles.input} onChangeText={(text)=>setText(text)}/>
            <TouchableOpacity onPress={handleOnPress}>
                
            <Text  style={{color:color}}>{text}</Text>
            </TouchableOpacity>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_two: {
        flexDirection: 'row-reverse'
    },
    input: { 
        width: 300, 
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 20
    }
});