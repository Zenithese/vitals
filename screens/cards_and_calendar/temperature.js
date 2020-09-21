import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/styles.js'


export default function Temperature({ temperature, updateTemperature }) {

    const [style, setStyle] = useState(styles.measurementDirections)
    const [spinnerStyle, setSpinnerStyle] = useState(styles.vanish)
    const [category, setCategory] = useState("body")

    const runTest = () => {
        setStyle(styles.vanish)
        setSpinnerStyle(style.spinner)
        setCategory("Temperature")
        setTimeout(() => {
            setSpinnerStyle(styles.vanish)
            updateTemperature(String((Math.random() * (100 - 96) + 96).toFixed(2)))
        }, 1500)
    }

    return (
        <View style={styles.temperature} >
            <TouchableOpacity onPress={() => runTest()} style={styles.fillParent}>
                <View style={styles.measurement}>
                    <View style={style}>
                        <Text style={styles.directionsText}>Wear <Text style={{fontWeight: "bold"}}>Thermoeter</Text> to view Temperature</Text>
                    </View>
                    <Text style={styles.category}>{category}</Text>
                    <Text>
                        <ActivityIndicator size="large" style={spinnerStyle} />
                    </Text>
                    <Text style={styles.reading}>{temperature}</Text>
                    <Text style={styles.readingType}>°F</Text>
                </View> 
            </TouchableOpacity>
        </View>
    )
}