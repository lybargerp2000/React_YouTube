import React, {Component} from 'react';
import './App.css';
import Die from './components/Die';

class Main extends Component{
  display(message){
      alert(message);
  }
  
  render(){
      
      return(
          <div className="App">
              <h1>Roll Die!</h1>
              <Die numberOfSides={50}/>
​
              {/* <RegisterForm /> */}
          </div>
      );
  }
}
export default Main;
