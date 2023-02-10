import {Component, useState} from 'react';
import './App.css';
import User from './User';
class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    console.warn("consturctor called");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    // return true;
    if(this.state.count>3 && this.state.count<10){
      return true;
    }
    return false;
  }
  render(){
    return(
      <div>
        <h1>component Did Update {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>
        {/* <button onClick={()=>this.setState({count:1})}>update</button> */}
      </div>
    )
  }


}


export default App;
