import { ADD_ICECREAM, BUY_ICECREAM } from "./IceCreamTypes";

export const addIceCream = (number=1) => {
    return {
        type: ADD_ICECREAM,
        payload: number
    }
}

export const buyIceCream = (number=1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}
