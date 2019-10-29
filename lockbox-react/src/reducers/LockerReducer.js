import { LOCKER_FETCHS, LOCKER_FETCH, LOCKER_UPDATE } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case LOCKER_FETCHS:
        case LOCKER_FETCH:
            return action.payload
        case LOCKER_UPDATE:
            return { ...state, saved: true, msg: "ทำรายการสำเร็จ" }
        default:
            return state
    }
}