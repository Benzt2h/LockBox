import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import LockerReducer from './LockerReducer';

const rootReducer = combineReducers({
    locker: LockerReducer,
    form: reduxForm
})

export default rootReducer