import { Component } from "react";

class User extends Component{
    ///// props update//////
    // render()
    // {
    //     console.warn("render method calling");
    //     return(
    //         <div>
    //             <h1>User Component {this.props.name}</h1>

    //         </div>
    //     )
    // }

///////state update
    constructor(){
        super();
        this.state={
            email:"abc@test.com"
        }
    }
    render()
    {
        console.warn("render method calling");
        return(
            <div>
                <h1>User Component {this.state.email}</h1>
                <button onClick={()=>this.setState({email:"xyz@test.com"})}>update email</button>

            </div>
        )
    }
}
export default User;