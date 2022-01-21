import React from "react";

function Dropdown(props){

    return(
        <>
        <select>
            <option>College</option>
        </select>

        <button>Add {props.name}</button>
        </>
    )
}

export default Dropdown