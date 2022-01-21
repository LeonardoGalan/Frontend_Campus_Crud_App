import React, { useState } from "react";

function CampusCard() {
  const [image, setImage] = useState(
    "https://www.brooklyn.cuny.edu/web/cam_spaces/200228_Snowy_Quad_738x330.jpg"
  );
  const [name, setName] = useState("Placeholder");
  // const[description, setDescription] = useState("Placeholder for description")
  // const[addy, setAddy] = useState("2900 Bedford Ave, Brooklyn, NY 11210");

  return (
    <>
      <div className="infoArea">
        <div className="campusCardImageField">
          <img src={image} />
        </div>

        <div>
          <h1 className="campusName">{name}</h1>
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
