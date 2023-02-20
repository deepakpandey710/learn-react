import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protect(props){
    const Navigate=useNavigate();
    const Component=props.comp;
    useEffect(()=>{
        const key=localStorage.getItem('login');
        if(!key){
            Navigate('/login');
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )
}
export default Protect;