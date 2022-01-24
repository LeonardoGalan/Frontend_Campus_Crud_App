import React, { useState } from "react";
import axios from "axios";
import { EMPTY_STUDENT } from "../../constants";
import "../../styles/StudentForm.css";

function StudentForm(props) {
  const [inputVal, setInputVal] = useState(EMPTY_STUDENT);

  // input handler
  function setVal(event) {
    setInputVal((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const newStudent = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      gpa: event.target[3].value,
      imageUrl: event.target[4].value,
      campusName: event.target[5].value,
    };

    props.addStudentHandler(newStudent);

    axios
      .post(`http://localhost:8080/students/`, newStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // clear input fields
    setInputVal(EMPTY_STUDENT);
  }

  return (
    <div className="student-form-container">
      <h2 className="student-form-header">New Student Form</h2>
      <hr />
      <form className="student-form" onSubmit={formSubmitHandler}>
        <label>First Name</label>
        <input name="firstName" placeholder="First Name..." onChange={setVal} type="text" value={inputVal.firstName} />
        <label>Last Name</label>
        <input name="lastName" placeholder="Last Name..." onChange={setVal} type="text" value={inputVal.lastName} />
        <label>Email</label>
        <input name="email" placeholder="Student Email..." onChange={setVal} type="text" value={inputVal.email} />
        <label>GPA</label>
        <input name="gpa" placeholder="Student gpa..." onChange={setVal} type="number" value={inputVal.gpa} />
        <label>Photo</label>
        <input name="imageUrl" placeholder="Student image..." onChange={setVal} type="text" value={inputVal.imageUrl} />
        <label>Register Campus</label>
        <input name="campusName" placeholder="Campus name..." onChange={setVal} type="text" value={inputVal.campusName} />

        <button className="add-student-btn link-buttons">Register Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
