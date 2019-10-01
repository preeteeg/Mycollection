import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShopingBagIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon=({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
     <ShopingBagIcon className='shopping-icon'/>
     <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps= dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})


export default connect(
    null,
    mapDispatchToProps
    )(CartIcon)