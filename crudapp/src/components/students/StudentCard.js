import React from "react";
import profile from "../../images/vince-veras.jpg";
import "../../styles/StudentCard.css";

function StudentCard(props) {
  return (
    <div className="student-card">
      <img
        className="student-img"
        src={props.student.imageUrl}
        alt="student-profile-pic"
      />
      <h2 className="student-name">{`${props.student.firstName} ${props.student.lastName}`}</h2>
      <h3 className="student-campus-name">Campus Name</h3>
      <p className="student-email">{props.student.email}</p>
      <p className="student-gpa">{props.student.gpa}</p>
    </div>
  );
}

export default StudentCard;
