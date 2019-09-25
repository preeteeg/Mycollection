import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Shop} from './pages/shop/shop.component'
import {Homepage} from './pages/homepage/homepage.component'

class App extends React.Component{
  constructor(){
    super();
    this.state={
        collections:[]
    }
}

render(){
 return <div className="App">
          <Switch>
            <Route path='/' exact={true} component={Homepage}/>
            <Route path='/' exact={true} component={Shop}/>
           </Switch>
         </div>
         }
  
}


export default App;
