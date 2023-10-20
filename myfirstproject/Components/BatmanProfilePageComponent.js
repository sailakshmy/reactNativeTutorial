import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default BatmanProfilePageComponent = () => {
    return (
        <>
            <View style={styles.avatar_container}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/batman-avatar.png')}/>
                    <Text style={{maxWidth: 200, marginTop: 10}}>"It's not who I am underneath, but what I do that defines me"</Text>
                </View>
            </View>
            <View style={styles.details_container}>
                <View style={styles.item}>
                    <Text style={styles.label}>Name: </Text>
                    <Text style={styles.data}>Batman</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>City: </Text>
                    <Text style={styles.data}>Gotham</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Favorite Color: </Text>
                    <Text style={styles.data}>Black</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Job: </Text>
                    <Text style={styles.data}>Superhero</Text>
                </View>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    avatar_container: {
        // backgroundColor:'blue',
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor:'black',

    },
    details_container: {
        backgroundColor: 'white',
        flex: 0.6
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor:'black',
        flex: 0.25,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    label:{
        flex: 0.9,
        color:'orange',
        fontSize: 32
    },
    data:{
        fontSize: 32
    }
})