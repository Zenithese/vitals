import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles.js'


export default function Temperature({ temperature, updateTemperature }) {

    const runTest = () => {
        updateTemperature(String(Math.floor(Math.random() * 100)))
    }

    return (
        <View style={styles.temperature} >
            <TouchableOpacity onPress={() => runTest()} style={styles.fillParent}>
                <View style={styles.measurement}>
                    <Text>Temperature</Text>
                    <Text>{temperature}</Text>
                </View> 
            </TouchableOpacity>
        </View>
    )
}