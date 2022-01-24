import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { EMPTY_CAMPUS } from "../../constants";
import { StudentCard } from "../students";
import StudentButton from "../students/StudentButton";
import "../../styles/SingleCampus.css";

function SingleCampus(props) {
  const [selectedCampus, setSelectedCampus] = useState(EMPTY_CAMPUS);
  const [campusStudents, setCampusStudents] = useState([]);
  const { campusName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/campuses/${campusName}`)
      .then((res) => setSelectedCampus(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/campuses/${campusName}/students`)
      .then((res) => setCampusStudents(res.data))
      .catch((err) => console.log(err));
  }, [campusName]);

  function deleteCampus() {
    axios
      .delete(`http://localhost:8080/campuses/${campusName}`, selectedCampus)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const studentCards = campusStudents.map((student) => (
    <StudentCard key={student.studentId} student={student} />
  ));

  return (
    <>
      <div className="single-student-container">
        <img className="single-student-image" src={selectedCampus.imageUrl} alt="profile" />
        <div className="single-student-info">
          <h2 className="single-student-name">{selectedCampus.name}</h2>
          <p className="single-student-gpa">{selectedCampus.description}</p>
          <StudentButton styleName="edit-student-btn" text="Edit" linkTo={"./edit-campus"} />
          <StudentButton
            styleName="delete-student-btn "
            clickHandler={deleteCampus}
            text="Delete"
            linkTo="/campuses"></StudentButton>
        </div>
      </div>

      <h2 className="student-list-header">Students On Campus</h2>
      <div className="student-list-container">{studentCards}</div>
    </>
  );
}

export default SingleCampus;
