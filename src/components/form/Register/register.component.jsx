import React from 'react'
import {FormInput} from '../form-input/form-input.component'
import '../Register/register.styles.scss'
import {CustomButton} from '../../custom-button/custom-button.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.util'


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
    handleSubmit=async e=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state
        if(password!==confirmPassword){
            alert('password does not match')
          return
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(
                email,
                password
            ) 
           await createUserProfileDocument(user,{displayName})
           this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
           })
        }
        catch(error){
            console.error(error)
        }
  
    }
   
    handleChange=(e)=>{
        const {value,name}=e.target
        this.setState({[name]:value})
        }

    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return(
            <div className='sign-up'>
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>
         
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} label="Display Name" required onChange={this.handleChange}/>
                    <FormInput type="email" name="email" value={email} label="Email" required onChange={this.handleChange} />
                    <FormInput type="password" name="password" value={password} label="Password" required onChange={this.handleChange} />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} label="Confirm Password" required onChange={this.handleChange} />
                    <CustomButton type="submit" name="signup">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default Register