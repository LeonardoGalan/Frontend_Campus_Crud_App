import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import StudentButton from "./StudentButton";
import "../../styles/SingleStudent.css";

function SingleStudent(props) {
  const navigate = useNavigate();
  const { studentId } = useParams(); // get the student id passed in from the URL

  // I'm doing this because without it, refreshing the browser would break the page otherwise
  const [selectedStudent, setSelectedStudent] = useState({});
  useEffect(() => {
    const fetchSingleStudent = async () => {
      axios
        .get(`http://localhost:8080/students/${studentId}`)
        .then((res) => setSelectedStudent(res.data))
        .catch((err) => console.log(err));
    };
    fetchSingleStudent();
  }, []);

  return (
    <div className="single-student-container">
      <img
        className="single-student-image"
        src={selectedStudent.imageUrl}
        alt="profile"
      />
      <div className="single-student-info">
        <h2 className="single-student-name">{`${selectedStudent.firstName} ${selectedStudent.lastName}`}</h2>
        <p className="single-student-email">{selectedStudent.email}</p>
        <p className="single-student-gpa">GPA: {selectedStudent.gpa}</p>
        <StudentButton
          styleName="edit-student-btn"
          text="Edit"
          linkTo={`edit-student`}
          onClick={() => props.selectHandler(studentId)}
        />
        <button
          className="delete-student-btn link-buttons"
          onClick={() => props.deleteHandler(studentId, selectedStudent)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleStudent;
