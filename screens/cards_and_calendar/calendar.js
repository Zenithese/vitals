import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../styles/styles.js';
import FloatingActionButton from '../floating_action_button';
import { connect } from 'react-redux';
import { fetchMeasurements } from '../../actions/measurement_actions'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';


function Calendar({ measurements, fetchMeasurements }) {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [blood, setBlood] = useState("__ /__")
    const [oximeterSpo2, setOximeterSpo2] = useState("__")
    const [oximeterPr, setOximeterPr] = useState("__")
    const [temperature, setTemperature] = useState("__")
    const [month, setMonth] = useState(new Date().getMonth())
    const [date, setDate] = useState(new Date().getDate())
    const [day, setDay] = useState(new Date().getDay())

    useEffect(() => {
        fetchMeasurements()
    }, [])

    useEffect(() => {
        if (measurements.length) {
            setBlood(measurements[month][date] ? measurements[month][date].blood : "__ /__");
            setOximeterSpo2(measurements[month][date] ? measurements[month][date].oximeterSpo2 : "__");
            setOximeterPr(measurements[month][date] ? measurements[month][date].oximeterPr : "__");
            setTemperature(measurements[month][date] ? measurements[month][date].temperature : "__")
        }
    }, [date, measurements])

    useEffect(() => {
        if (date > new Date(new Date().getFullYear(), month + 1, 0).getDate()) {
            setMonth((month + 1) % 12)
            setDate(date - new Date(new Date().getFullYear(), month + 1, 0).getDate())
        } else if (date <= 0) {
            setMonth(month - 1 === -1 ? 11 : month - 1)
            setDate(date + new Date(new Date().getFullYear(), month, 0).getDate())
        }
    }, [date])

    const setVitals = (index) => {
        fetchMeasurements()
        setDate(date - (day - index))
        setDay(index)
    }

    const week = () => {
        let dates = []
        let lastDayOfTheMonth = new Date(new Date().getFullYear(), month + 1, 0).getDate();
        for (let i = 0; i < 7; i++) {
            if (lastDayOfTheMonth < date - day + i) {
                dates.push(<Text key={i} style={day === i ? styles.selectedDate : styles.dates} onPress={() => setVitals(i)}>·</Text>)
            } else if (date - day + i <= 0) {
                dates.push(<Text key={i} style={day === i ? styles.selectedDate : styles.dates} onPress={() => setVitals(i)}>·</Text>)
            } else {
                dates.push(<Text key={i} style={day === i ? styles.selectedDate : styles.dates} onPress={() => setVitals(i)}>{date - day + i}</Text>)
            }
        }
        return (
            <View style={styles.datesContainer}>
                {dates}
            </View>
        )
    }

    return (
        <View style={styles.calendarContainer}>
            <View>
                <View style={styles.month}>
                <GestureRecognizer
                        onSwipeLeft={() => { date < 10 ? setDate(date + 35) : setDate(date + 28) }}
                        onSwipeRight={() => { date > 20 ? setDate(date - 35) : setDate(date - 28) }}
                >
                    <Text>{months[month]}</Text>
                </GestureRecognizer>
                </View>
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
                <GestureRecognizer
                    onSwipeLeft={() => setDate(date + 7)}
                    onSwipeRight={() => setDate(date - 7)}
                >  
                    {week()}
                </GestureRecognizer>
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
