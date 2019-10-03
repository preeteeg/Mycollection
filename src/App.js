import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import {Shop} from './pages/shop/shop.component'
import {Homepage} from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import {SignInAndSignUpPage} from './pages/signInAndSignUpPage/SignInAndSignUpPage.component'
import {auth,createUserProfileDocument} from './components/firebase/firebase.util'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "./redux/user/user.selectors"

class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       currentUser:null
//     }
  
// }
unsubscribedFromAuth=null
componentDidMount(){
  this.unsubscribedFromAuth=auth.onAuthStateChanged( async userAuth=>{
   const {setCurrentUser}=this.props
 
    //this.setState({currentUser:user})
   // createUserProfileDocument(user)
   //user exist
   if(userAuth){
     const userRef= await createUserProfileDocument(userAuth)
    // console.log(userRef) 
    //get the first state
     userRef.onSnapshot(snapshot=>{
       console.log(snapshot.data())
      //  this.setState({
      //    currentUser:{
      //      id:snapshot.id,
      //      ...snapshot.data()
      //    }
      //  }
       
      //  ,()=>{
      //   console.log(this.state) 
      //  }
      // )
      setCurrentUser({
         id:snapshot.id,
         ...snapshot.data()
       })

     })
   }
   else{
    setCurrentUser(userAuth)
   }
    //console.log(user)
})}

componentWillUnmount(){
  this.unsubscribedFromAuth()
}


render(){
 return <div className="App">
          <Header/>
          <Switch>
            <Route path='/' exact={true} component={Homepage}/>
            <Route path='/shop' exact={true} component={Shop}/>
            <Route path='/account' exact={true}  render={()=>this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
           </Switch>
         </div>
         }
  
}
// const mapStateToProps=({user})=>({
//   currentUser:user.currentUser
// })

const mapStateToProps= createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps= dispatch=>({
  setCurrentUser : user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
