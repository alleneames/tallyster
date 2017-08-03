let defaultState = {
    politicians: []
}

const MAINREDUCER = (state = defaultState, action)=> {
    if(action.type === "SET_DATA") {
        return {
            ...state,
            politicians: action.politicians
        }
    } else {
        return {
            ...state
        }
    }
}

export default MAINREDUCER;