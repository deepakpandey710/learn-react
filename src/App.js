import {Component, useState} from 'react';
import './App.css';
import User from './User';
class App extends Component{
  constructor(){
    super();
    this.state={
      name:"deepak"
    }
  }
  componentDidMount(){
    console.warn('componentDidMount');
  }
  render()
  {
    console.warn('render');
    return(
      <div>
        <h1>Component Did mount {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"pandey"})}>update</button>
      </div>
    )
  }
}


export default App;
