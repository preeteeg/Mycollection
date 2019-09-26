import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Shop} from './pages/shop/shop.component'
import {Homepage} from './pages/homepage/homepage.component'
import {Header} from './components/header/header.component'
import {SignInAndSignUpPage} from './pages/signInAndSignUpPage/SignInAndSignUpPage.component'
class App extends React.Component{
  constructor(){
    super();
  
}

render(){
 return <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact={true} component={Homepage}/>
            <Route path='/shop' exact={true} component={Shop}/>
            <Route path='/account' exact={true} component={SignInAndSignUpPage}/>
           </Switch>
         </div>
         }
  
}


export default App;
