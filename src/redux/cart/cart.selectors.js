
import {createSelector} from 'reselect'

//input selector return a piece of the state
const selectCart = state => state.cart

//memorization
export const selectCartItems= createSelector(
    [selectCart],
    cart=>cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart=>cart.hidden
)

//
export const selectCartItemsCount= createSelector(
    [selectCartItems],//collection
    cartItems=>
    cartItems.reduce(
        (accumaltedQuantity,cartItem)=>
        accumaltedQuantity + cartItem.quantity,
        0
    )
)