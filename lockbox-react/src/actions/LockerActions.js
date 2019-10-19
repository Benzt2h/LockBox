import axios from 'axios';
import { LOCKER_FETCHS } from './types';

export const lockerFetchs = () => {
    return dispatch => {
        axios.get(REACT_APP_API_URL + "locker").then(
            res => {
                dispatch({ type: LOCKER_FETCHS, payload: redata })
            }
        )
    }
}
