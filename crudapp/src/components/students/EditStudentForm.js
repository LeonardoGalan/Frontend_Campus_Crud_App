import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { EMPTY_STUDENT } from "../../constants";
import { StudentForm } from ".";

function EditStudentForm() {
  const [inputVal, setInputVal] = useState(EMPTY_STUDENT);
  const { studentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleStudent = async () => {
      axios
        .get(`http://localhost:8080/students/${studentId}`)
        .then((res) => setInputVal(res.data))
        .catch((err) => console.log(err));
    };

    fetchSingleStudent();
  }, []);

  function setVal(event) {
    setInputVal((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const newStudent = { ...inputVal };
    axios
      .put(`http://localhost:8080/students/${studentId}`, newStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // redirect to student page after registering
    navigate(`../students/${studentId}`);
  }

  return (
    <StudentForm
      header="Edit Profile"
      changeHandler={setVal}
      formValues={inputVal}
      formHandler={formSubmitHandler}
      buttonText="Edit"
      buttonClass="edit"
    />
  );
}

export default EditStudentForm;
