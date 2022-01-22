import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import StudentButton from "./StudentButton";

function EditStudentForm(props) {
  const [inputVal, setInputVal] = useState({
    firstName: "",
    lastName: "",
    gpa: "",
    imageUrl: "",
    email: "",
  });

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
    setInputVal((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    navigate(-1)
  }

  return (
    <div className="student-form-container">
      <h2 className="student-form-header">Edit Profile</h2>
      <hr />
      <form className="student-form" onSubmit={formSubmitHandler}>
        <label>First Name</label>
        <input
          name="firstName"
          onChange={setVal}
          type="text"
          value={inputVal.firstName}
        />
        <label>Last Name</label>
        <input name="lastName" onChange={setVal} type="text" value={inputVal.lastName} />
        <label>Email</label>
        <input name="email" onChange={setVal} type="text" value={inputVal.email} />
        <label>GPA</label>
        <input name="gpa" onChange={setVal} type="number" value={inputVal.gpa} />
        <label>Photo</label>
        <input name="imageUrl" onChange={setVal} type="text" value={inputVal.imageUrl} />
        <button className="edit-student-btn">Edit Student</button>
      </form>
    </div>
  );
}

export default EditStudentForm;
