import axios from 'axios';
import { LOCKER_FETCHS, LOCKER_FETCH, LOCKER_UPDATE } from './types';

export const lockerFetchs = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "locker").then(
            res => {
                dispatch({ type: LOCKER_FETCHS, payload: res.data })
            }
        )
    }
}

export const lockerFetch = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "locker/" + id).then(
            res => {
                if (res.data["start"] != null) {
                    res.data["time"] = res.data["start"] % 60
                    if (res.data["size"] == "M") {
                        res.data["price"] = (res.data["start"] % 60) * 30
                    }
                    else if (res.data["size"] == "L") {
                        res.data["price"] = (res.data["start"] % 60) * 40
                    }
                    else if (res.data["size"] == "XL") {
                        res.data["price"] = (res.data["start"] % 60) * 50
                    }

                }
                dispatch({ type: LOCKER_FETCH, payload: res.data })
                console.log(res.data)
            }
        )
    }
}

export const lockerUpdate = (id, values) => {
    if (values["start"] != null) {
        delete values["p-password"];
        delete values["p-price"];
        delete values["price"];
        delete values["time"];
        values["password"] = null
        values["start"] = null
        return dispatch => {
            axios.put(process.env.REACT_APP_API_URL + "locker/" + id, values).then(
                res => {
                    dispatch({ type: LOCKER_UPDATE })
                }
            )
        }
    } else {
        values.start = Math.round(new Date().getTime() / (1000 * 60))
        delete values["p-password"];
        return dispatch => {
            axios.put(process.env.REACT_APP_API_URL + "locker/" + id, values).then(
                res => {
                    dispatch({ type: LOCKER_UPDATE })
                }
            )
        }
    }
}
