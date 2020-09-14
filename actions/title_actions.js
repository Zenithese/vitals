export const SET_TITLE = "SET_TITLE"
export const RECEIVE_TITLE = "RECEIVE_TITLE"

const createTitle = (title) => {
    return {
        type: SET_TITLE,
        title,
    }
}

const receiveTitle = () => {
    return {
        type: RECEIVE_TITLE,
    }
}

export const setTitle = (title) => dispatch => {
    return dispatch(createTitle(title))
}

export const fetchTitle = () => dispatch => {
    return dispatch(receiveTitle())
}