import React from "react";
import { ShowSingle } from "../generic";

function SingleStudent(props) {
  return (
    <div>
      {props.studentId}
      <ShowSingle />
    </div>
  );
}

export default SingleStudent;
