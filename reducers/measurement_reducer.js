import { RECEIVE_MEASUREMENT, RECEIVE_MEASUREMENTS } from '../actions/measurement_actions'

export default titleReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEASUREMENT:
            return [...state, action.measurement]
        case RECEIVE_MEASUREMENTS:
            return action.measurements;
        default:
            return state;
    }
}