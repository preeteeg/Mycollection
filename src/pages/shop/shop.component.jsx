import React from 'react'
import SHOP_DATA from './shop.data.js'

export class Shop extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        return(
            <div>SHOP</div>
        )
    }
}