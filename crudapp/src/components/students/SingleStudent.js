import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StudentButton from "./StudentButton";
import "../../styles/SingleStudent.css";

function SingleStudent(props) {
  const [selectedStudent, setSelectedStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gpa: "",
    imageUrl: "",
  });
  const { studentId } = useParams();

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
        <StudentButton styleName="edit-student-btn" text="Edit" linkTo="#" />
        <StudentButton styleName="delete-student-btn" text="Delete" linkTo="#" />
      </div>
    </div>
  );
}

export default SingleStudent;
