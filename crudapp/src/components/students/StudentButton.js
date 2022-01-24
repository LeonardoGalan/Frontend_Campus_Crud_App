import React from "react";
import { Link } from "react-router-dom";
import "../../styles/StudentButton.css";

function StudentButton(props) {
  return (
    <Link className={`${props.styleName} link-buttons`} onClick={props.clickHandler} to={props.linkTo}>
      {props.text}
    </Link>
  );
}

export default StudentButton;
