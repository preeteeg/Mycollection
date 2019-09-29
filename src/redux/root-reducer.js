//all the reducers will be in the root reducer
//actual base reducer object of all states combined in our application


import {combineReducers} from 'redux'
import userReducers from './user/user.reducer'

export default combineReducers({
    user:userReducers
})