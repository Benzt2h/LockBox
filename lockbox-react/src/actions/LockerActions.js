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
                dispatch({ type: LOCKER_FETCH, payload: res.data })
            }
        )
    }
}

export const lockerUpdate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + "locker/" + id, values).then(
            res => {
                dispatch({ type: LOCKER_UPDATE })
            }
        )
    }
}
