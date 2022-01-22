import React, { useState } from "react";
import axios from "axios";
import StudentButton from "./StudentButton";
import "../../styles/StudentForm.css";

function StudentForm() {
  const [inputVal, setInputVal] = useState({
    firstName: "",
    lastName: "",
    gpa: "",
    imageUrl: "",
    email: "",
  });

  function setVal(event) {
    console.log(inputVal);
    setInputVal((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(event.target[0]);

    // collect Form data into new student object
    const newStudent = {
      studentId: 20,
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      gpa: Number(event.target[2].value),
      email: event.target[3].value,
      imageUrl: event.target[4].value,
    };

    // POST request to backend server
    /* TODO refactor */
    // axios
    //   .post(`http://localhost:8080/students/`, newStudent)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    // clear input fields
    setInputVal({
      firstName: "",
      lastName: "",
      gpa: "",
      imageUrl: "",
      email: "",
    });
  }

  return (
    <div className="student-form-container">
      <h2 className="student-form-header">New Student Form</h2>
      <hr />
      <form className="student-form" onSubmit={formSubmitHandler}>
        <label>First Name</label>
        <input
          name="firstName"
          placeholder="Student first name"
          onChange={setVal}
          type="text"
          value={inputVal.firstName}
        />
        <label>Last Name</label>
        {/* <span>hello</span> */}
        <input
          name="lastName"
          placeholder="Student last name"
          onChange={setVal}
          type="text"
          value={inputVal.lastName}
        />
        <label>Email</label>
        <input
          name="email"
          placeholder="Add Student Email"
          onChange={setVal}
          type="text"
          value={inputVal.email}
        />
        <label>GPA</label>
        <input
          name="gpa"
          placeholder="Student GPA"
          onChange={setVal}
          type="number"
          value={inputVal.gpa}
        />
        <label>Photo</label>
        <input
          name="imageUrl"
          placeholder="Add Student Image"
          onChange={setVal}
          type="text"
          value={inputVal.imageUrl}
        />

        <StudentButton styleName="add-student-btn" text="Add New Student" linkTo="#" />
      </form>
    </div>
  );
}

export default StudentForm;
