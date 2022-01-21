import React, { useState } from "react";

function CampusCard(props) {
 

  return (
    <>
      <div className="infoArea">
        <div className="campusCardImageField">
          <img src={props.campus.imageUrl} />
        </div>

        <div>
          <h1 className="campusName">{props.campus.name}</h1>
          <p>{} Students</p>

          <div className="bottom-btns">
            <p className="edit-btn">edit</p>
            <button>delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampusCard;
