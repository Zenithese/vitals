import { RECEIVE_MEASUREMENT, RECEIVE_MEASUREMENTS } from '../actions/measurement_actions'

export default titleReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEASUREMENT:
            return [...state, action.measurement]
        case RECEIVE_MEASUREMENTS:
            Date.prototype.getMonthWeek = function () { var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay(); return Math.ceil((this.getDate() + firstDay) / 7) }
            let newState = new Array(12).fill(0).map(() => new Array)
            action.measurements.forEach((measurement) => {
                newState[new Date(measurement.createdAt).getMonth()][new Date(measurement.createdAt).getDate()] = measurement
            })
            return newState;
        default:
            return state;
    }
}