
import CartActionTypes from './cart.types'
//action can have type value and payload value

export const toggleCartHidden=()=>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

//item when to the array
export const addItem= item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item //item we are trying to the array
})