import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        marginBottom: 16
    },
    androidButtonText: {
        color: 'blue',
        fontSize: 20
    },
    month: {
        marginTop: 10,
        textAlign: "center",
        alignItems: 'center',
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-around',
        marginTop: 50,
        backgroundColor: "whitesmoke",
    },
    card: {
        width: "40%", 
        height: "35%",
        backgroundColor: 'powderblue',
        margin: 10,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: "red",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    calendar: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 20,
    },
    days: {
        flex: 1,
        textAlign: "center",
    },
    line: {
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 8,
    },
    datesContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 20,
        backgroundColor: "whitesmoke"
    },
    dates: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "transparent",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontWeight: "bold",
    },
    selectedDate: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "red",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "powderblue",
        textAlign: "center",
        fontWeight: "bold",
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'red',
    },
    calendarContainer: {
        height: "100%"
    },
    measurements: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    measurement: {
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        flexDirection: "row",
    },
    temperature: {
        backgroundColor: '#e6e6e6',
        margin: 30,
        marginBottom: 0,
        flex: 1,
        borderColor: "red",
        borderRadius: 10,
    },
    blood: {
        backgroundColor: '#e6e6e6',
        margin: 30,
        marginBottom: 0,
        flex: 1,
        borderColor: "red",
        borderRadius: 10,
    },
    oximeter: {
        backgroundColor: '#e6e6e6',
        margin: 30,
        justifyContent: 'space-around',
        flex: 1,
        borderColor: "red",
        borderRadius: 10,
    },
    fillParent: {
        height: "100%",
        width: "100%"
    },
    button: {
        backgroundColor: '#262673',
        margin: 30,
        flex: .4,
        borderColor: "red",
        borderRadius: 10,
        opacity: 0.9,
    },
    buttonText: {
        color: "white", 
        fontWeight: "bold", 
        fontSize: 20,
        textShadowColor: "black",
        textShadowRadius: 2,
    },
    measurementDirections: {
        backgroundColor: "#262673",
        position: "absolute",
        height: "100%",
        width: "70%",
        top: 0,
        right: 0,
        borderRadius: 10,
        zIndex: 1,
        opacity: 0.9,
    },
    vanish: {
        display: "none",
    },
    category: {
        position: "absolute",
        left: 50
    },
    spinner: {
        position: "absolute",
        zIndex: 2,
    },
    reading: {
        position: "absolute",
        right: 50,
        fontSize: 40,
        fontWeight: "bold",
        color: "#262673",
    },
    readingType: {
        position: "absolute",
        right: 40,
        top: 110,
    },
    readingSpO2: {
        position: "absolute",
        right: "50%",
        fontSize: 40,
        fontWeight: "bold",
    },
    readingTypeSpO2: {
        position: "absolute",
        right: "48%",
        top: 110,
        color: "#262673",
    },
    categorySpO2: {
        position: "absolute",
        right: "33%",
    },
    directionsText: {
        color: "white",
        textAlign: "center",
        justifyContent: 'center',
        margin: 60
    },
    denominator: {
        color: "#00cccc"
    }
});