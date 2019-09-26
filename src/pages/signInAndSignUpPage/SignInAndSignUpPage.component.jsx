import React from 'react'
import SignIn from '../../components/form/signIn/sign-in.component'
import Register from '../../components/form/Register/register.component'
import './signInAndSignUpPage.styles.scss'

export const SignInAndSignUpPage = ()=>(
    <div className='SignInAndSignUpContainer'>
      <SignIn/>
      <Register/>
    </div>
)