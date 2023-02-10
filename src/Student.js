import React from "react";
export default class Student extends React.Component{
    componentWillUnmount(){
        console.warn("unmount component called");
    }
    render()
    {
        console.log(this.props)
        return (
            <div>
                <h1>class component</h1>
            </div>
        )
    }
}