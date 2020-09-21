import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/styles.js'
// import { IonSpinner, IonContent } from '@ionic/react';


export default function Oximeter({ oximeter, updateOximeter, oximeterPr, updateOximeterPr }) {

    const [style, setStyle] = useState(styles.measurementDirections)
    const [spinnerStyle, setSpinnerStyle] = useState(styles.vanish)

    const runTest = () => {
        setStyle(styles.vanish)
        setSpinnerStyle(null)
        setTimeout(() => {
            setSpinnerStyle(styles.vanish)
            updateOximeter(String(Math.floor(Math.random() * (130 - 120) + 120)))
            updateOximeterPr(String(Math.floor(Math.random() * (80 - 71) + 71)))
        }, 1500)
    }

    return (
        <View style={styles.oximeter} >
            <TouchableOpacity onPress={() => runTest()} style={styles.fillParent}>
                <View style={styles.measurement}>
                    <View style={style}><Text style={styles.directionsText}>Wear <Text style={{ fontWeight: "bold" }}>Oximeter</Text> to view SpO2 and PR</Text></View>
                    <Text style={styles.category}>SpO2</Text>
                    <Text><ActivityIndicator size="large" style={spinnerStyle} /></Text>
                    <Text style={styles.readingSpO2}>{oximeter}</Text>
                    <Text style={styles.readingTypeSpO2}>%</Text>
                    <Text style={styles.categorySpO2}>PR</Text>
                    <Text style={styles.reading}>{oximeterPr}</Text>
                    <Text style={styles.readingType}>bpm</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}