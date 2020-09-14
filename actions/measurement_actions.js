import * as APIUtil from '../util/measurements_util'

export const RECEIVE_MEASUREMENT = "RECEIVE_MEASUREMENT"
export const RECEIVE_MEASUREMENTS = "RECEIVE_MEASUREMENTS"

const receiveMeasurement = (measurement) => {
    return {
        type: RECEIVE_MEASUREMENT,
        measurement,
    }
}

const receiveMeasurements = (measurements) => {
    return {
        type: RECEIVE_MEASUREMENTS,
        measurements,
    }
}

export const createMeasurement = (measurement) => dispatch => {
    return APIUtil.createMeasurement(measurement).then(measurement =>
        dispatch(receiveMeasurement(measurement.data))
    )
}

export const fetchMeasurements = () => dispatch => {
    return APIUtil.fetchMeasurements().then(measurements => 
        dispatch(receiveMeasurements(measurements.data))
    )
}