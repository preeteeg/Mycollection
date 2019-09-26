import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

export const Header= ()=>(
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className="Logo" />
      </Link>
      <div className="options">
          <Link className="option" to="/shop">SHOP</Link>
          <Link className="option" to="/account">SIGN IN</Link>
          <Link className="option" to="/contact-us">CONTACT US</Link>
      </div>
    </div>
)