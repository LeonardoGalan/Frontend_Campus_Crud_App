import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EMPTY_CAMPUS } from "../../constants";
import { StudentRow } from "../students";

import "../../styles/editCampus.css";

function EditCampus(props) {
  const [inputVal, setInputVal] = useState(EMPTY_CAMPUS);
  const [studentsOnCampus, setStudentsOnCampus] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");

  const { campusName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleStudent = async () => {
      axios
        .get(`http://localhost:8080/campuses/${campusName}`)
        .then((res) => setInputVal(res.data))
        .catch((err) => console.log(err));
    };

    fetchSingleStudent();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/campuses/${campusName}/students`)
      .then((res) => setStudentsOnCampus(res.data))
      .catch((err) => console.log(err));
  }, []);

  function setVal(event) {
    console.log(inputVal);
    setInputVal((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const updatedCampus = { ...inputVal };
    axios
      .put(`http://localhost:8080/campuses/${campusName}`, updatedCampus)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // redirect to campus page after registering
    navigate(`../campuses/${campusName}`);
  }

  function optionHandler(event) {
    if (event.target.value) {
      setDropdownValue(event.target.value);
    }
  }

  function addStudentToCampus() {
    const studentToAdd = props.unregisteredStudents.find(
      (student) => student.studentId === dropdownValue
    );
    const updatedStudent = { ...studentToAdd, campusName: campusName };
    axios
      .put(`http://localhost:8080/students/${updatedStudent.studentId}`, updatedStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const campusStudents = props.unregisteredStudents.map((student) => (
    <option key={student.studentId} value={student.studentId}>
      {student.firstName} {student.lastName}
    </option>
  ));

  const studentRows = studentsOnCampus.map((student) => (
    <StudentRow key={student.studentId} student={student} />
  ));

  return (
    <>
      <div className="student-form-container">
        <h2 className="student-form-header">Edit Campus Form</h2>
        <hr />

        <form className="student-form" onSubmit={formSubmitHandler}>
          <label>College Name</label>
          <input
            name="name"
            placeholder="Add Campus Name"
            onChange={(event) => setVal(event)}
            type="text"
            value={inputVal.name}
          />
          <label>Campus Location</label>
          <input
            name="address"
            placeholder="Add Campus Location"
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
          <button className="edit-student-btn link-buttons">Save Changes</button>
        </form>
      </div>

      <div className="show-student-campus">
        <h1>Students On Campus</h1>

        <select className="campus-select" onChange={optionHandler}>
          <option value="">Select Student...</option>
          {campusStudents}
        </select>
        <button className="edit-student-btn link-buttons" onClick={addStudentToCampus}>
          Add to Campus
        </button>
        {studentsOnCampus.length ? (
          <>{studentRows}</>
        ) : (
          <h3>There are currently no students registered to this Campus</h3>
        )}
      </div>
    </>
  );
}

export default EditCampus;
