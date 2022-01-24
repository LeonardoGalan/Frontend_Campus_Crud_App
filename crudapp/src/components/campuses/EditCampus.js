import React from "react";
import "../../styles/editCampus.css";

function EditCampus() {
  return (
    <div className="editCampusForm">
      <h2 className="editheader">Edit Campus Info</h2>
      <hr />
      <form className="editForm">
        <input placeholder="Campus Name" />
        <input placeholder="Campus Location"></input>
        <input placeholder="Campus Image Url"></input>
        <textarea placeholder="Campus Description"></textarea>
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default EditCampus;
