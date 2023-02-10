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
  componentDidUpdate(preProps,preState,snapshot){
    console.warn("componentDidMount called",preProps,preState,snapshot);
    if(preState.count==this.state.count){
      alert("hey brooo");
    }
  }
  render(){
    return(
      <div>
        <h1>component Did Update {this.state.count}</h1>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>update</button> */}
        <button onClick={()=>this.setState({count:1})}>update</button>
      </div>
    )
  }


}


export default App;
