import React from "react";
import profile from "../../images/vince-veras.jpg";
import "../../styles/StudentCard.css";

export default function StudentCard(props) {
  return (
    <div className="student-card">
      <img className="student-img" src={profile} alt="student-profile-pic" />
      <h2 className="student-name">Student Full Name</h2>
      <h3 className="student-campus-name">Campus Name</h3>
      <p className="student-email">{props.email}</p>
      <p className="student-gpa">GPA</p>
    </div>
  );
}
