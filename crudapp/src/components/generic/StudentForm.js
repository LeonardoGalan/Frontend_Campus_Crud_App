import React, { useState } from 'react'

function StudentForm(){
    const [inputVal, setInputVal] = useState({
        firstName: "",
        lastName: "",
        gpa: 0.0,
        img:"",
        email: ""
    });

    function setVal(event){
        console.log(inputVal);
        setInputVal((prev)=> ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <>
        <form>
            <h2>Student Name</h2>
            <input name="firstName" placeholder='Student first name' onChange={(event)=> setVal(event)} type="text" value={inputVal.firstName}/>
            <input name="lastName" placeholder='Student last name' onChange={(event)=> setVal(event)} type="text" value={inputVal.lastName}/>
            <input name='gpa' placeholder='Student GPA' onChange={(event)=> setVal(event)} type="number" value={inputVal.gpa}/>
            <input name="email" placeholder='Add Student Email' onChange={(event)=> setVal(event)} type="text" value={inputVal.email}/>
            <input name="img" placeholder='Add Student Image' onChange={(event)=> setVal(event)} type="text" value={inputVal.img}/>
        

            
            <button>Add Student</button>
        </form>
        </>
    )
}

export default StudentForm