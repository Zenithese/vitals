import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles.js';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Blood from './cards_and_calendar/blood'
import Oximeter from './cards_and_calendar/oximeter'
import Temperature from './cards_and_calendar/temperature';
import { createMeasurement } from '../actions/measurement_actions'

function MeasureNow({ createMeasurement }) {

    const [temperature, setTemperature] = useState("0")
    const [blood, setBlood] = useState("0/")
    const [bloodDenominator, setBloodDenominator] = useState("0")
    const [oximeterSpo2, setOximeterSpo2] = useState("0")
    const [oximeterPr, setOximeterPr] = useState("0")

    const handleComplete = (e) => {
        e.preventDefault()
        const data = {
            temperature,
            blood,
            oximeterSpo2,
            oximeterPr,
        }

        createMeasurement(data)
    }

    return (
        <View style={styles.measurements}>

            <Temperature temperature={temperature} updateTemperature={setTemperature}/>
            <Blood blood={blood} updateBlood={setBlood} denominator={bloodDenominator} updateDenominator={setBloodDenominator}/>
            <Oximeter oximeter={oximeterSpo2} updateOximeter={setOximeterSpo2} oximeterPr={oximeterPr} updateOximeterPr={setOximeterPr}/>

            <View style={styles.button} >
                <TouchableOpacity onPress={(e) => handleComplete(e)} style={styles.fillParent}>
                    <View style={styles.measurement}>
                        <Text style={styles.buttonText}>Complete</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        createMeasurement: (measurement) => dispatch(createMeasurement(measurement))
    }
}

export default connect(null, mapDispatchToProps)(MeasureNow);