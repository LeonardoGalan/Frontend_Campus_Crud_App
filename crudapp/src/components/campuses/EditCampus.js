import React from "react";

function EditCampus() {
  return (
    <>
      <form>
        <input placeholder="Campus Name" />
        <input placeholder="Campus Location"></input>
        <input placeholder="Campus Image Url"></input>
        <textarea placeholder="Campus Description"></textarea>
        <button>Save Changes</button>
      </form>
    </>
  );
}

export default EditCampus;
