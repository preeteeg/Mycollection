import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Shop} from './pages/shop/shop.component'
import {Homepage} from './pages/homepage/homepage.component'
import {Header} from './components/header/header.component'
import {SignInAndSignUpPage} from './pages/signInAndSignUpPage/SignInAndSignUpPage.component'
import {auth} from './components/firebase/firebase.util'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  
}
unsubscribedFromAuth=null
componentDidMount(){
  this.unsubscribedFromAuth=auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
    console.log(user)
})}

componentWillUnmount(){
  this.unsubscribedFromAuth()
}


render(){
 return <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/' exact={true} component={Homepage}/>
            <Route path='/shop' exact={true} component={Shop}/>
            <Route path='/account' exact={true} component={SignInAndSignUpPage}/>
           </Switch>
         </div>
         }
  
}


export default App;
