import {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';


function App(){
  const [data,setDate]=useState(null);
  const [print,setPrint]=useState(false);
  function getData(val){
    console.log(val.target.value);
    setDate(val.target.value);
    setPrint(false)
  }
  return(
    <div className="App">
      {
        print?
        <h1>{data}</h1>
        :null
      }
      
      <input type="text" onChange={getData}></input>
      <button onClick={()=>setPrint(true)}>print data</button>
      
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
