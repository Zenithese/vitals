import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles.js'


export default function Blood({ blood, updateBlood }) {

    const runTest = () => {
        updateBlood(String(Math.floor(Math.random()*100)))
    }

    return (
        <View style={styles.blood} >
            <TouchableOpacity onPress={() => runTest()} style={styles.fillParent}>
                <View style={styles.measurement}>
                    <Text>Blood</Text>
                    <Text >{blood}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}