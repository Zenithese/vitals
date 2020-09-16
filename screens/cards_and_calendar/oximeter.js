import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles.js'


export default function Oximeter({ oximeter, updateOximeter, oximeterPr, updateOximeterPr }) {

    const runTest = () => {
        updateOximeter(String(Math.floor(Math.random() * (130 - 120) + 120)))
        updateOximeterPr(String(Math.floor(Math.random() * (80 - 71) + 71)))
    }

    return (
        <View style={styles.oximeter} >
            <TouchableOpacity onPress={() => runTest()} style={styles.fillParent}>
                <View style={styles.measurement}>
                    <Text>Oximeter</Text>
                    <Text >SpO2: {oximeter}%</Text>
                    <Text >PR: {oximeterPr} bpm</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}