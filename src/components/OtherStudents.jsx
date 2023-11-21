import { useContext,useEffect } from "react"
import { studentsContext } from "../providers/StudentContextProvider"
import Student from "./Student"


const OtherStudents =()=>{

    const {getOtherStudents,otherStudents}=useContext(studentsContext)

    useEffect(()=>{
        if(!otherStudents.length){
            getOtherStudents()
        }
    },[otherStudents,length])

    return<>
    <h3>Other Students</h3>
    {
        otherStudents.length? otherStudents.map((students)=>{
            return <Student key={students.userId} username={students.username}/>
        })
        :<p>Loading...</p>
    }
    </>
}

export default OtherStudents