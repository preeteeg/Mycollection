import React from 'react'
import {connect} from 'react-redux'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShopingBagIcon} from '../../assets/shopping-bag.svg'
import {createStructuredSelector} from 'reselect'
import './cart-icon.styles.scss'

const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
     <ShopingBagIcon className='shopping-icon'/>
     <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps= dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

// const mapStateToProps=({cart:{cartItems}})=>{
//   console.log("test being called again")
//   return({
//     itemCount:cartItems.reduce(
//         (accumalatedQuantity , cartItem)=>accumalatedQuantity+cartItem.quantity,
//         0
//     )
//     })
// }

//memorizied selected
// const mapStateToProps =(state)=>({
//     itemCount:selectCartItemsCount(state)
// })

const mapStateToProps =createStructuredSelector({
    itemCount:selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon)