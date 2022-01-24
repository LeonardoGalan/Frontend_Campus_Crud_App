import React from "react";
import { Link } from "react-router-dom";
import "../../styles/StudentButton.css";

function CampusButton(props) {
  return (
    <Link className={props.styleName} to={props.linkTo}>
      {props.text}
    </Link>
  );
}

export default CampusButton;