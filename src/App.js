import {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';


function App(){
  const [status,setStatus]=useState(true);
  
  return(
    <div className="App">
      {
        status?<h1>Hello World!</h1>:null
      }
      {/* <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(false)}>hide</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
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
