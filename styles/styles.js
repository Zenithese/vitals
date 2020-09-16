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
    },
    temperature: {
        backgroundColor: 'powderblue',
        margin: 30,
        marginBottom: 0,
        flex: 1,
        borderColor: "red",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    blood: {
        backgroundColor: 'powderblue',
        margin: 30,
        marginBottom: 0,
        flex: 1,
        borderColor: "red",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    oximeter: {
        backgroundColor: 'powderblue',
        margin: 30,
        justifyContent: 'space-around',
        flex: 1,
        borderColor: "red",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    fillParent: {
        height: "100%",
        width: "100%"
    },
    button: {
        backgroundColor: 'powderblue',
        margin: 30,
        flex: .4,
        borderColor: "red",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    buttonText: {
        color: "white", 
        fontWeight: "bold", 
        fontSize: 20,
        textShadowColor: "black",
        textShadowRadius: 2,
    },
});