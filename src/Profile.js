import {useState} from 'react'
function Profile(){
    // const [login,setLogin]=useState(false);

    // return(
    //     <div>
    //         {login?<h1>Hello Deepak</h1>:<h1>hello guest</h1>}
    //     </div>
    // )
    const [login,setLogin]=useState(2);
    //1,2,3
    return(
        <div>
            {login==1?<h1>Hello user 1</h1>:login==2?<h1>hello user2</h1>:<h1>hello user3</h1>}
        </div>
    )









    // if(login){
    //     return(
    //         <div>
    //             <h1>hello deepak</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>hello guest</h1>
    //         </div>
    //     )
    // }
}
export default Profile;