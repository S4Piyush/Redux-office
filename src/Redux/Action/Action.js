import axios from "axios"
import { LOGIN_DATA, SINUP_DATA, TEMP_DATA } from "../type"

export const tempdata = () => async (dispatch) => {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                dispatch({
                    type: TEMP_DATA,
                    payload: res
                })
            })
    } catch (err) {

    }
}

export const logindata = () => (dispatch) => {
    try {
        dispatch({
            type: LOGIN_DATA,
            payload: "piyushramani@gmail.com"

        })
    } catch (err) {
        console.log('err', err)

    }
}
export const sinupData = () => async (dispatch) => {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                dispatch({
                    type: SINUP_DATA,
                    payload: res

                })
            })

    } catch (err) {
        console.log('err', err)
    }

}