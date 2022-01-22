import React from "react";
import { Link } from "react-router-dom";
import "../../styles/StudentButton.css";

function StudentButton(props) {
  return (
    <Link to={props.linkTo}>
      <button className={props.styleName}>{props.text}</button>
    </Link>
  );
}

export default StudentButton;
