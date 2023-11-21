import { StudentContextProvider, studentsContext } from "./providers/StudentContextProvider";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Home from "./components/Home";
import OtherStudents from "./components/OtherStudents";
import {  Route, Routes,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContext } from "react";

const App =()=>{
  const {token} =useContext(studentsContext)
  return<>
 
    <Navbar/>
    <Routes>
      {token ? <>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/other-students" element={<OtherStudents/>}/>
      <Route path="/" element={<Navigate to='/signin'/>}/>
      </> :<>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/" element={<Navigate to='/signin'/>}/>
      <Route path="*" element={<Navigate to='/signin'/>}/>
      </>
    }
    </Routes>
  
  </>
}

export default App