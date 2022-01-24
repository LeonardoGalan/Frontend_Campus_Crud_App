import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { EMPTY_STUDENT } from "../../constants";
import { StudentForm } from ".";

function AddStudentForm(props) {
  const [inputVal, setInputVal] = useState(EMPTY_STUDENT);
  const navigate = useNavigate();
  const newStudentId = nanoid();

  function setVal(event) {
    setInputVal((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const newStudent = {
      studentId: newStudentId,
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      gpa: event.target[3].value,
      imageUrl: event.target[4].value,
      campusName: event.target[5].value,
    };

    // update local state
    props.addStudentHandler(newStudent);

    axios
      .post(`http://localhost:8080/students/`, newStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // redirect after submit
    navigate(`../students/${newStudentId}`);
  }

  return (
    <StudentForm
      header="New Student Form"
      changeHandler={setVal}
      formValues={inputVal}
      formHandler={formSubmitHandler}
      buttonText="Register New Student"
      buttonClass="add"
    />
  );
}

export default AddStudentForm;
