import {useSearchParams} from 'react-router-dom'
const Filter=() =>{
    const [searchParams,setSearchParams]=useSearchParams();
    console.log("age ",searchParams.get('age'));
    console.log("city ", searchParams.get('city'));
    const age=searchParams.get('age');
    const city=searchParams.get('city');
    const setSearch=(e)=>{
        setSearchParams({city:e.target.value,age:10});
    }
    const setage=(e)=>{
        setSearchParams({age:e.target.value})
    }
    return(
        <div>
            <h1>Filter page</h1>
            <h3>age : {age}</h3>
            <h3>city : {city}</h3>
            <input type='text' onChange={setSearch}/>
            <input type='Number' onChange={setage}/>
            <button onClick={()=>setSearchParams({age:70,city:'noida'})}>set search params</button>
        </div>
    )
}
export default Filter;