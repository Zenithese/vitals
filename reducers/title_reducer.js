import { SET_TITLE, RECEIVE_TITLE } from '../actions/title_actions'

export default titleReducer = (state = "Vitals", action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_TITLE:
            return action.title;
        case RECEIVE_TITLE:
            return state;
        default:
            return state;
    }
}