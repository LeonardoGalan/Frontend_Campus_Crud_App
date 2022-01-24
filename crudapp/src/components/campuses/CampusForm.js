import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/StudentForm.css";
import { EMPTY_CAMPUS } from "../../constants";

function CampusForm() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState(EMPTY_CAMPUS);

  function setVal(event) {
    setInputVal((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const newCampus = {
      name: event.target[0].value,
      address: event.target[1].value,
      imageUrl: event.target[2].value,
      description: event.target[3].value,
    };

    axios
      .post("http://localhost:8080/campuses", newCampus)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // navigate to campus page
    navigate("/campuses");
  }

  return (
    <>
      <div className="student-form-container">
        <h2 className="student-form-header">New Campus Form</h2>
        <hr />

        <form className="student-form" onSubmit={formSubmitHandler}>
          <label>Campus Name</label>
          <input
            name="name"
            placeholder="Add Campus Name"
            onChange={(event) => setVal(event)}
            type="text"
            value={inputVal.name}
          />
          <label>Address</label>
          <input
            name="address"
            placeholder="Add Campus location"
            onChange={(event) => setVal(event)}
            type="text"
            value={inputVal.address}
          />
          <label>Campus Image</label>
          <input
            name="imageUrl"
            placeholder="Add Campus image url"
            onChange={(event) => setVal(event)}
            type="text"
            value={inputVal.imageUrl}
          />
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Add Campus Description"
            onChange={(event) => setVal(event)}
            type="text"
            value={inputVal.description}
          />
          <button className="add-student-btn link-buttons">Add New Campus</button>
        </form>
      </div>
    </>
  );
}

export default CampusForm;
