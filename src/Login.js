import { useState } from "react";

function Login(){
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

    function Loginhandle(e){
        if(user.length<3 || password.length<3){
            alert("please enter correct details");
        }
        else{
            alert(`all good ${user} ;)`)
        }
        e.preventDefault();
    }
    function handleuser(e){
        let item=e.target.value;
        if(item.length<3){
            setUserErr(true);
        }else{
            setUserErr(false);
        }
        setUser(item);
    }
    function handlepass(e){
        let item=e.target.value;
        if(item.length<3){
            setPassErr(true);
        }else{
            setPassErr(false);
        }
        setPassword(item);
    }
    return(
        <div onSubmit={Loginhandle}>
            <h1>Login Component</h1>
            <form>
                <input type="text" placeholder="enter username" onChange={handleuser}/>{userErr?<span>enter valid username</span>:null}
                <br /><br />
                <input type="password" placeholder="enter password" onChange={handlepass} />{passErr?<span>enter valid password</span>:null}
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;