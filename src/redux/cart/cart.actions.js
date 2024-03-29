
import CartActionTypes from './cart.types'
//action can have type value and payload value

export const toggleCartHidden=()=>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

//add item when to the array
export const addItem= item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item //item we are trying to the array
})

export const clearItemFromCart=  item=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})



export const  removeItemFromCart  =  item=>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})