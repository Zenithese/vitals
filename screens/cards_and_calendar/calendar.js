import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles.js';
import FloatingActionButton from '../floating_action_button';
import { connect } from 'react-redux';
import { fetchMeasurements } from '../../actions/measurement_actions'


function Calendar({ measurements, fetchMeasurements }) {

    const [blood, setBlood] = useState("124/80")
    const [oximeterSpo2, setOximeterSpo2] = useState("96%")
    const [oximeterPr, setOximeterPr] = useState("96%")
    const [temperature, setTemperature] = useState("98.0")
    const [style, setStyle] = useState("0")

    useEffect(() => {
        fetchMeasurements()
    }, [fetchMeasurements])

    let data = [
                {"blood": "124/80", "oximeter": "96%", "temperature": "98.0"},
                {"blood": "124/70", "oximeter": "94%", "temperature": "97.0"},
                {"blood": "127/80", "oximeter": "95%", "temperature": "98.3"},
                {"blood": "134/75", "oximeter": "86%", "temperature": "97.6"},
                {"blood": "130/60", "oximeter": "76%", "temperature": "97.4"},
                {"blood": "124/90", "oximeter": "99%", "temperature": "98.1"},
                {"blood": "124/80", "oximeter": "89%", "temperature": "97.6"},
            ]

    const setVitals = (index) => {
        setStyle(index)
        setBlood(measurements[index].blood);
        setOximeterSpo2(measurements[index].oximeterSpo2);
        setOximeterPr(measurements[index].oximeterPr);
        setTemperature(measurements[index].temperature)
    }

    return (
        <View style={styles.calendarContainer}>
            <View>
                <View style={styles.calendar}>
                    <Text style={styles.days}>Sun</Text>
                    <Text style={styles.days}>Mon</Text>
                    <Text style={styles.days}>Tues</Text>
                    <Text style={styles.days}>Wed</Text>
                    <Text style={styles.days}>Thurs</Text>
                    <Text style={styles.days}>Fri</Text>
                    <Text style={styles.days}>Sat</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.datesContainer}>
                    <Text style={style === "0" ? styles.selectedDate : styles.dates} onPress={() => setVitals("0")}>1</Text>
                    <Text style={style === "1" ? styles.selectedDate : styles.dates} onPress={() => setVitals("1")}>2</Text>
                    <Text style={style === "2" ? styles.selectedDate : styles.dates} onPress={() => setVitals("2")}>3</Text>
                    <Text style={style === "3" ? styles.selectedDate : styles.dates} onPress={() => setVitals("3")}>4</Text>
                    <Text style={style === "4" ? styles.selectedDate : styles.dates} onPress={() => setVitals("4")}>5</Text>
                    <Text style={style === "5" ? styles.selectedDate : styles.dates} onPress={() => setVitals("5")}>6</Text>
                    <Text style={style === "6" ? styles.selectedDate : styles.dates} onPress={() => setVitals("6")}>7</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text>temperature</Text>
                    <Text>{temperature}°F</Text>
                </View>
                <View style={styles.card}>
                    <Text>Blood</Text>
                    <Text>{blood} mmHg</Text>
                </View>
                <View style={styles.card}>
                    <Text>Oximeter</Text>
                    <Text>SpO2: {oximeterSpo2}%</Text>
                    <Text>PR: {oximeterPr} bpm</Text>
                </View>
            </View>
            <FloatingActionButton />
        </View>
    )
}

const mapStateToProps = ({ entities }) => {
    return {
        measurements: entities.measurements,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMeasurements: () => dispatch(fetchMeasurements())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);