import { SINUP_DATA } from "../type";

export const webSinupData = (state = {}, action) => {
    switch (action.type) {
        case SINUP_DATA: {
            return {
                ...state,
                webdata: action.payload
            }
        }
        default:
            return state
    }
}