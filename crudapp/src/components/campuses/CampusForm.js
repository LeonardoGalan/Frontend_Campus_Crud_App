import axios from 'axios';
import React, { useState } from 'react'
import "../../styles/StudentForm.css";
import CampusButton from './CampusButton';

function CampusForm(){
    const [inputVal, setInputVal] = useState({
        name: "",
        img:"",
        address:"",
        description:""
    });

    function setVal(event){
        console.log(inputVal);
        setInputVal((prev)=> ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    function formSubmitHandler(event) {
        event.preventDefault();
    
        // collect Form data into new Campus object
        const newCampus = {
          name: event.target[0].value,
          imageUrl: event.target[1].value,
          description: event.target[2].value
        };

        // axios.post("localhostUrl", newCampus)
        // .then(res=> console.log(res))

    }

    return(
        <>
            <div className="student-form-container">
                <h2 className="student-form-header">New Campus Form</h2>
                <hr />
      
                <form className="student-form" onSubmit={formSubmitHandler}>
                    <label>College Name</label>
                    <input name="name" placeholder='Add Campus Name' onChange={(event)=> setVal(event)} type="text" value={inputVal.name}/>
                    <label>Campus Image</label>
                    <input name="img" placeholder='Add Campus image url' onChange={(event)=> setVal(event)} type="text" value={inputVal.img}/>
                    <label>Description</label>
                    <textarea name='description' placeholder='Add Campus Description' onChange={(event)=> setVal(event)} type="text" value={inputVal.description}/>
                    <CampusButton styleName="add-student-btn" text="Add New Campus" linkTo="#" />
                </form>
            </div>
        </>
    )
}

export default CampusForm