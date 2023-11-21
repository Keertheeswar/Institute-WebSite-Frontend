import { Link } from "react-router-dom";
import { studentsContext } from "../providers/StudentContextProvider";
import { useContext } from "react";

const Navbar =()=>{

    const {token,setToken,setCurrentUser,setOtherStudents}=useContext(studentsContext)

    const signOut =()=>{
        localStorage.removeItem('authorization')
        setToken('')
        setCurrentUser('')
        setOtherStudents([])
    }
    return<>
    {
    token ? <div id="navbar">
    <Link to='/home'>Home</Link>
    <Link to='/other-students'>Other Students</Link>
    <Link to='/signin' onClick={signOut}>Sign Out</Link>
    </div>:<>
    <h3>Burzt Institute</h3>
    </>
}
    </>
}

export default Navbar