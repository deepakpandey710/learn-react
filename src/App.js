import {Component, useState} from 'react';
import './App.css';
import Student from './Student';
class App extends Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  render(){
    return(
      <div>
        {
          this.state.show?<Student/>:<h1>child</h1>
        }
        <button onClick={()=>this.setState({show:!this.state.show})}>toggle</button>
      </div>
    )
  }


}


export default App;
