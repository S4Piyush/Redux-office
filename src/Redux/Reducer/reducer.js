import { LOGIN_DATA, TEMP_DATA } from "../type"

export const editreducer = (state = {}, action) => {
    console.log('action', action)
    switch (action.type) {
        case LOGIN_DATA:
            return {
                ...state,
                data: action.payload

            }
        default:
            return state
    }
}
export const tempreducer = (state = {}, action) => {
    switch (action.type) {
        case TEMP_DATA:
            return {
                ...state,
                tempData: action.payload
            }
        default:
            return state
    }
}

