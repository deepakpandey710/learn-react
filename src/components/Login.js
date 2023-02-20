import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    function setlogin(){
        localStorage.setItem('login',true);
        Navigate('/');
    }
    const Navigate=useNavigate();
    useEffect(()=>{
        const key=localStorage.getItem('login');
        if(key){
            Navigate('/');
        }
    })
    return(
        <div>
            <h1>Login page</h1>
            <input type='text' placeholder="username" />
            <input type='password' placeholder="password" />
            <button onClick={setlogin}>Login</button>
        </div>
    )
}
export default Login;