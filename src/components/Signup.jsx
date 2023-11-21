import { useContext,useState } from "react";
import { studentsContext } from "../providers/StudentContextProvider";
import { Link } from "react-router-dom";

const SignUp =()=>{

    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const {signUp} =useContext(studentsContext)

    return<>
    <p>Sign Up</p>
    <input type="text" placeholder="Enter username" onChange={(e)=>{
        setUserName(e.target.value)}} />
    <input type="text" placeholder="Enter password" onChange={(e)=>{
        setPassword(e.target.value)}} />
    <button onClick={()=>{
        signUp(username,password)
    }}>Sign Up</button>
    <Link to='/signin' id="signin-link">Existing User? SignIn</Link>
    </>
}

export default SignUp