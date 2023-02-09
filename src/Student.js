import React from "react";
export default class Student extends React.Component{
    render()
    {
        console.log(this.props)
        return (
            <div>
                <h1>hello {this.props.name}</h1>
            </div>
        )
    }
}