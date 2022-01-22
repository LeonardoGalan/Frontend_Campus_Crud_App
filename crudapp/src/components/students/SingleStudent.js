import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleStudent(props) {
  const [selectedStudent, setSelectedStudent] = useState({});
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
      <img className="profile-img" src={selectedStudent.imageUrl} alt="profile" />
      <h2>{`${selectedStudent.firstName} ${selectedStudent.lastName}`}</h2>
      <p>{selectedStudent.gpa}</p>
      <p>{selectedStudent.email}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default SingleStudent;
