import {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App(){
  const [name,setName]=useState("deepak");
  return(
    <div className="App">
      <Student name={name} email="abc@test.com" others={{address:"delhi", pin:231}}/>
      <button onClick={()=>{setName("pandey")}}>update name</button>
    </div>
  )
}











// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       data:1
//     }
//   }
//   update(){
//     this.setState({
//       data:this.state.data+1
//     })
//   }
//   render(){
//     return (
//       <div className="App">
//         <h1>hi {this.state.data}</h1>
//         <button onClick={()=>this.update()}>click me</button>
//       </div>
//     );
//   }
// }
export default App;
