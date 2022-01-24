import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { EMPTY_STUDENT } from "../../constants";
import { CampusCard } from "../campuses";
import StudentButton from "./StudentButton";
import "../../styles/SingleStudent.css";

function SingleStudent(props) {
  const { studentId } = useParams();
  const [selectedStudent, setSelectedStudent] = useState(EMPTY_STUDENT);
  const [selectedStudentCampus, setSelectedStudentCampus] = useState(null);
  const [dropdownValue, setDropdownValue] = useState("");

  // I'm doing this because without it, refreshing the browser would break the page otherwise
  useEffect(() => {
    const fetchSingleStudent = () => {
      axios
        .get(`http://localhost:8080/students/${studentId}`)
        .then((res) => setSelectedStudent(res.data))
        .catch((err) => console.log(err));
    };

    fetchSingleStudent();
  }, []);

  // second use effect because I need the student to be set first
  useEffect(() => {
    const fetchStudentCampus = () => {
      if (selectedStudent.campusName) {
        axios
          .get(`http://localhost:8080/campuses/${selectedStudent.campusName}`)
          .then((res) => setSelectedStudentCampus(res.data))
          .catch((err) => console.log(err));
      }
    };

    fetchStudentCampus();
  }, [selectedStudent]);

  // when user clicks change campus button, update student
  function updateStudentCampus() {
    if (dropdownValue && dropdownValue !== selectedStudent.campusName) {
      const updatedStudent = { ...selectedStudent, campusName: dropdownValue };
      setSelectedStudent(updatedStudent);
      axios
        .put(`http://localhost:8080/students/${studentId}`, updatedStudent)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  // when user selects option from dropdown
  function optionHandler(event) {
    if (event.target.value) {
      setDropdownValue(event.target.value);
    }
  }

  function deleteStudent() {
    axios
      .delete(`http://localhost:8080/students/${studentId}`, selectedStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  // campus dropdown options
  const campuses = props.allCampuses.map((campus) => (
    <option key={campus.campusId} value={campus.name}>
      {campus.name}
    </option>
  ));

  return (
    <>
      <div className="single-student-container">
        <img className="single-student-image" src={selectedStudent.imageUrl} alt="profile" />
        <div className="single-student-info">
          <h2 className="single-student-name">{`${selectedStudent.firstName} ${selectedStudent.lastName}`}</h2>
          <p className="single-student-email">{selectedStudent.email}</p>
          <p className="single-student-gpa">GPA: {selectedStudent.gpa}</p>
          <StudentButton styleName="edit-student-btn" text="Edit" linkTo={`edit-student`} />
          <StudentButton
            styleName="delete-student-btn "
            clickHandler={deleteStudent}
            text="Delete"
            linkTo="../students"></StudentButton>
        </div>
      </div>

      <div className="show-student-campus">
        {selectedStudentCampus ? (
          <>
            <h2>Student Registered Campus</h2>
            <CampusCard campus={selectedStudentCampus} />
          </>
        ) : (
          <h3>Student not Registered to a Campus</h3>
        )}

        <select className="campus-select" onChange={optionHandler}>
          <option value="">Choose a Campus</option>
          {campuses}
        </select>
        <button className="edit-student-btn link-buttons" onClick={updateStudentCampus}>
          Change Campus
        </button>
      </div>
    </>
  );
}

export default SingleStudent;
