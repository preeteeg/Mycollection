import React from 'react'
import {ReactComponent as ShopingBagIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
export const CartIcon=()=>(
    <div className='cart-icon'>
     <ShopingBagIcon className='shopping-icon'/>
     <span className='item-count'>0</span>
    </div>
)