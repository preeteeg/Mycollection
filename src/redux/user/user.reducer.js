
import {UserActionTypes} from './user.types'

// pure function
const INITIAL_STATE = {
    currentUser:null
}

//return the current state of the user
//take 2 object the state and action
const userReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
           return{
               ...state,
               currentUser:action.payload
           }
    
        default:
           return state
           
    }
}
export default userReducer