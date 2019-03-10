import { combineReducers } from 'redux'
import users from './UsersReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
    users,
    form: formReducer
})
export default rootReducers