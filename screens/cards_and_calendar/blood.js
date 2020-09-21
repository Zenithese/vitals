import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/styles.js'
// import { IonSpinner, IonContent } from '@ionic/react';


export default function Blood({ blood, updateBlood, denominator, updateDenominator }) {

    const [style, setStyle] = useState(styles.measurementDirections)
    const [spinnerStyle, setSpinnerStyle] = useState(styles.vanish)

    const runTest = () => {
        setStyle(styles.vanish)
        setSpinnerStyle(styles.spinner)
        setTimeout(() => {
            setSpinnerStyle(styles.vanish)
            updateBlood(String(Math.floor(Math.random() * (130 - 120) + 120)) + "/")
            updateDenominator(String(Math.floor(Math.random() * (75 - 65) + 65)))
        }, 1500)
    }

    return (
        <View style={styles.blood} >
            <TouchableOpacity onPress={() => runTest()} style={styles.fillParent}>
                <View style={styles.measurement}>
                    <View style={style}><Text style={styles.directionsText}>Wear <Text style={{ fontWeight: "bold" }}>Blood Pressure Monitor</Text> to view Blood Pressure</Text></View>
                    <Text style={styles.category}>Blood</Text>
                    <Text><ActivityIndicator size="large" style={spinnerStyle} /></Text>
                    <Text style={styles.reading}>{blood}<Text style={styles.denominator}>{denominator}</Text></Text>
                    <Text style={styles.readingType}>mmHg</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}