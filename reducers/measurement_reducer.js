import { RECEIVE_MEASUREMENT, RECEIVE_MEASUREMENTS } from '../actions/measurement_actions'

export default titleReducer = (state = "Vitals", action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEASUREMENT:
            return action;
        case RECEIVE_MEASUREMENTS:
            return state.measurements;
        default:
            return state;
    }
}