import React, { useState } from 'react'

function Form(props){
    const [inputVal, setInputVal] = useState("");
    return(
        <>
        <form>
            <h2>{props.name} Name</h2>
            <input onChange={(event)=> setInputVal(event.target.value)} type="text" value={inputVal}/>
            <button>Add {props.name}</button>
        </form>
        </>
    )
}

export default Form