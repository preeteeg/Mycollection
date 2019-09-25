import React from 'react'
import sections from './directory.data.js'
import {MenuItem} from '../menu-item/menu-item.component'
import  './directory.styles.scss'

export class Directory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sections:sections
        }
    }

    render(){
       return  ( 
                <div className='directory-menu'>
                 { 
                    this.state.sections.map(({id,...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                     ))
                 }
               </div>
            )
    }
}