//all the reducers will be in the root reducer
//actual base reducer object of all states combined in our application


import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
export default combineReducers({
    user:userReducer,
    cart:cartReducer
})