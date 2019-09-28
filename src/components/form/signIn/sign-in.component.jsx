import React from 'react'
import {FormInput} from '../form-input/form-input.component'
import './sign-in.styles.scss'
import {CustomButton} from '../../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.util'
import {auth,createUserProfileDocument} from '../../firebase/firebase.util'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=async e=>{
        e.preventDefault()
        const{email,password}=this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email:'',
                password:''
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
        return(
            <div className='sign-in'>
               <h2>I have already an account</h2>
               <span>Sign in with your email and password</span>
               <form onSubmit={this.handleSubmit}>
                 <FormInput type="email" value={this.state.email} label="Email" name="email" required onChange={this.handleChange} />
                 <FormInput type="password" value={this.state.password} label="Password" name="password" required onChange={this.handleChange} />
                 <div className='buttons'>
                 <CustomButton type="submit"  name="signIn" >
                    SIGN IN
                 </CustomButton>
                 <CustomButton type="submit"  name="signIn"  onClick={signInWithGoogle} isGoogleSignIn>
                 SIGN IN WITH GOOGLE
              </CustomButton>
              </div>
              </form>
            </div>
        )
    }
    
}

export default SignIn