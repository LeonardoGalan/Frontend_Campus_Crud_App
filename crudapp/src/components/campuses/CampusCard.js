import React from "react";
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
    <>
      <div className="infoArea">
        <div className="campusCardImageField">
          <img src={props.campus.imageUrl} alt="campus-profile" />
        </div>

        <div>
          <h1 className="campusName">{props.campus.name}</h1>
          <p>{} Students</p>

          <div className="bottom-btns">
            <p className="edit-btn">edit</p>
            {/* <button onClick={handleDelete}>delete</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CampusCard;
