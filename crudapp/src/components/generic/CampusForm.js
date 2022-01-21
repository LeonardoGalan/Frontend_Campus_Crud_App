import React, { useState } from 'react'

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

    return(
        <>
        <form>
            <h2>Campus Name</h2>
            <input name="name" placeholder='Add Campus Name' onChange={(event)=> setVal(event)} type="text" value={inputVal.name}/>
            <input name="img" placeholder='Add Campus image url' onChange={(event)=> setVal(event)} type="text" value={inputVal.img}/>
            <input name="address" placeholder='Add Campus Address' onChange={(event)=> setVal(event)} type="text" value={inputVal.address}/>
            <input name='description' placeholder='Add Campus Description' onChange={(event)=> setVal(event)} type="text" value={inputVal.description}/>
            <button>Add Campus</button>
        </form>
        </>
    )
}

export default CampusForm