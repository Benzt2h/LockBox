import { LOCKER_FETCHS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case LOCKER_FETCHS:
            return action.payload
        default:
            return state
    }
}