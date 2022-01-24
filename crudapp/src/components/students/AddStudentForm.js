import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { EMPTY_STUDENT } from "../../constants";
import { StudentForm } from ".";

function AddStudentForm(props) {
  const [inputVal, setInputVal] = useState(EMPTY_STUDENT);
  // const [formErrors, setFormErrors] = useState(EMPTY_STUDENT);

  const navigate = useNavigate();
  const newStudentId = nanoid();

  /* form validation */
  // function formValidation(event) {
  //   const errors = {};
  //   let isValidForm = true;

  //   if (event.target.name === "firstName") {
  //     if (!event.target.value) {
  //       isValidForm = false;
  //       errors["firstName"] = "*Required";
  //     }
  //   }

  //   if (event.target.name === "lastName") {
  //     if (!event.target.value) {
  //       isValidForm = false;
  //       errors["lastName"] = "*Required";
  //     }
  //   }

  //   if (event.target.name === "email") {
  //     if (!event.target.value) {
  //       isValidForm = false;
  //       errors["email"] = "*Required";
  //     }
  //   }

  //   if (event.target.name === "email") {
  //     if (
  //       event.target.value.lastIndexOf("@") === -1 ||
  //       event.target.value.lastIndexOf(".") === -1
  //     ) {
  //       isValidForm = false;
  //       errors["email"] = "*Required - valid email";
  //     }
  //   }

  //   if (event.target.name === "gpa") {
  //     if (!event.target.value) {
  //       isValidForm = false;
  //       errors["gpa"] = "*Required";
  //     }
  //   }

  //   if (event.target.name === "campusName") {
  //     if (!event.target.value) {
  //       isValidForm = false;
  //       errors["campusName"] = "*Required";
  //     }
  //   }

  //   setFormErrors(errors);
  //   return isValidForm;
  // }

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
