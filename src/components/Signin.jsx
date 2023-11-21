import { useContext,useState } from "react";
import { studentsContext } from "../providers/StudentContextProvider";
import { Link } from "react-router-dom";

const SignIn =()=>{

    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const {signIn} =useContext(studentsContext)

    return<>
    <p>Sign In</p>
    <input type="text" placeholder="Enter username" onChange={(e)=>{
        setUserName(e.target.value)}} />
    <input type="text" placeholder="Enter password" onChange={(e)=>{
        setPassword(e.target.value)}} />
    <button onClick={()=>{
        signIn(username,password)
    }}>Sign In</button>
    <Link to='/signup' id="signup-link">New User? Signup</Link>
    </>
}

export default SignIn