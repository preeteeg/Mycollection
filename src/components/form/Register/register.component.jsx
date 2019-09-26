import React from 'react'
import {FormInput} from '../form-input/form-input.component'
import '../Register/register.styles.scss'
import {CustomButton} from '../../custom-button/custom-button.component'


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState=({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })

    }
   
    handleChange=(e)=>{
        const {value,name}=e.target
        this.setState({[name]:value})
        }

    render(){
        return(
            <div className='sign-up'>
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>
         
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} label="Display Name" required onChange={this.handleChange}/>
                    <FormInput type="email" name="email" value={this.state.email} label="Email" required onChange={this.handleChange} />
                    <FormInput type="password" name="password" value={this.state.password} label="Password" required onChange={this.handleChange} />
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} label="Confirm Password" required onChange={this.handleChange} />
                    <CustomButton type="submit" name="signup">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default Register