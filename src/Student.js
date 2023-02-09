function Student(props){
    console.log(props);
    return(
        <div>
            <h1>hello {props.name}</h1>
            <h2>email : {props.email}</h2>
            <h3>address : {props.others.address}</h3>
        </div>
    )
}
export default Student;