import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const DiscountCalculatorComponent = () => {
    const [amount, setAmount] = useState();
    const [discount, setDiscount] = useState();
    const [finalAmount, setFinalAmount] = useState();
    const [showFinal, setShowFinal] = useState(false);
    const onChangeAmount = (text) => setAmount(parseInt(text));
    const onChangeDiscount = (text) => setDiscount(parseInt(text));
    const calculateFinalAmount = () => {
        let final = amount - (amount * (discount / 100));
        setFinalAmount(final);
        setShowFinal(true);
    }
    return (
        <View>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Text style={{ fontSize: 22 }}>Discount Calculator</Text>
            </View>
            <View style={{ marginHorizontal: 40, marginTop: 40, marginBottom: 20 }}>
                <Text style={{ marginBottom: 10 }} >Amount</Text>
                <TextInput style={styles.textInput} value={amount} onChangeText={onChangeAmount} />
            </View>
            <View style={{ marginHorizontal: 40 }}>
                <Text style={{ marginBottom: 10 }}>Discount (%)</Text>
                <TextInput style={styles.textInput} value={discount} onChangeText={onChangeDiscount} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.calculateButton} onPress={calculateFinalAmount}>
                    <Text style={{ color: 'white' }}>Calculate</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={[styles.discountLabel, {color: showFinal ? 'green':'black'}]}>
                    The Amount after discount is:-
                </Text>
               <Text style={[styles.discountLabel, {color: showFinal ? 'green':'black'}]}>{finalAmount}</Text>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        paddingVertical: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    calculateButton: {
        backgroundColor: 'blue',
        height: 80,
        width: 80,
        borderRadius: 10,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    discountLabel: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 20
    }

})
export default DiscountCalculatorComponent;
