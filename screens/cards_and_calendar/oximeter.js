import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles.js'


export default function Oximeter({ oximeter, updateOximeter, oximeterPr, updateOximeterPr }) {

    const runTest = () => {
        updateOximeter(String(Math.floor(Math.random() * 100)))
        updateOximeterPr(String(Math.floor(Math.random() * 100)))
    }

    return (
        <View style={styles.oximeter} >
            <TouchableOpacity onPress={() => runTest()} style={styles.fillParent}>
                <View style={styles.measurement}>
                    <Text>Oximeter</Text>
                    <Text >{oximeter}</Text>
                    <Text >{oximeterPr}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}