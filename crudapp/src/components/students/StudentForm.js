import React, { useState } from "react";
import api from "../../api";

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
    api
      .post(`students/`, newStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

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
    <>
      <h2>Student Name</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          name="firstName"
          placeholder="Student first name"
          onChange={setVal}
          type="text"
          value={inputVal.firstName}
        />
        <input
          name="lastName"
          placeholder="Student last name"
          onChange={setVal}
          type="text"
          value={inputVal.lastName}
        />
        <input
          name="gpa"
          placeholder="Student GPA"
          onChange={setVal}
          type="number"
          value={inputVal.gpa}
        />
        <input
          name="email"
          placeholder="Add Student Email"
          onChange={setVal}
          type="text"
          value={inputVal.email}
        />
        <input
          name="imageUrl"
          placeholder="Add Student Image"
          onChange={setVal}
          type="text"
          value={inputVal.imageUrl}
        />

        <button>Add Student</button>
      </form>
    </>
  );
}

export default StudentForm;
