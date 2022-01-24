import React from "react";
import "../../styles/campusCard.css";
import { Link } from "react-router-dom"
// import axios from "axios";

function CampusCard(props) {
  /* refactor to app component */
  // function handleDelete(event) {
  //   axios
  //     .delete(`http://localhost:8080/campuses/${props.campus.name}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }

  return (
    <Link to="/CampusCard">
      <div className="infoArea">
        <div className="campusCardImageField">
          <img src={props.campus.imageUrl} alt="campus-profile" />
          <p>{props.campus.address}</p>
        </div>

        <div className="right-side" >
          <h1 className="campusName">{props.campus.name}</h1>

          <div className="bottom-btns">

            <Link className="edit-btn" to="/EditCampus">edit</Link>
            {/* <button {onClick={handleDelete}}>delete</button>  */}
            <button>delete</button>  
          </div>

        </div>
      </div>
    </Link>
  );
}

export default CampusCard;
