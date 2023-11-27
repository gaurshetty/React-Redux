import { ADD_ICECREAM, BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
    numOfIceCreams: 20
}

const IceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams + action.payload
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        default: return state
    }
}

export default IceCreamReducer
