import React from 'react'
import {FormInput} from '../form-input/form-input.component'
import './sign-in.styles.scss'
import {CustomButton} from '../../custom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange=(e)=>{
    const {value,name}=e.target
    this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
               <h2>I have already an account</h2>
               <span>Sign in with your email and password</span>
               <form onSubmit={this.handleSubmit}>
                 <FormInput type="email" value={this.state.email} label="Email" name="email" required onChange={this.handleChange} />
                 <FormInput type="password" value={this.state.password} label="Password" name="password" required onChange={this.handleChange} />
                 <CustomButton type="submit"  name="signIn" >
                    SIGN IN
                 </CustomButton>
              </form>
            </div>
        )
    }
    
}

export default SignIn