import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EMPTY_CAMPUS } from "../../constants";

function SingleCampus() {
  const { campusName } = useParams();
  const [selectedCampus, setSelectedCampus] = useState(EMPTY_CAMPUS);

  console.log(selectedCampus);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/campuses/${campusName}`)
      .then((res) => {
        console.log(res);
        setSelectedCampus(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single-student-container">
      <img className="single-student-image" src={selectedCampus.imageUrl} alt="profile" />
      <div className="single-student-info">
        <h2 className="single-student-name">{selectedCampus.name}</h2>
        <p className="single-student-gpa">{selectedCampus.description}</p>
        {/*  <StudentButton styleName="edit-student-btn" text="Edit" linkTo={`edit-student`} />
        <StudentButton
          styleName="delete-student-btn "
          clickHandler={deleteStudent}
          text="Delete"
          linkTo="../students"></StudentButton> */}
      </div>
    </div>
  );
}

export default SingleCampus;
