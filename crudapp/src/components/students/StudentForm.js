import React from "react";
import "../../styles/StudentForm.css";

function Form(props) {
  return (
    <div className="student-form-container">
      <h2 className="student-form-header">{props.header}</h2>
      <hr />
      <form className="student-form" onSubmit={props.formHandler}>
        <label>First Name</label>
        <input name="firstName" onChange={props.changeHandler} type="text" value={props.formValues.firstName} />
        <label>Last Name</label>
        <input name="lastName" onChange={props.changeHandler} type="text" value={props.formValues.lastName} />
        <label>Email</label>
        <input name="email" onChange={props.changeHandler} type="text" value={props.formValues.email} />
        <label>GPA</label>
        <input name="gpa" onChange={props.changeHandler} type="number" value={props.formValues.gpa} />
        <label>Photo</label>
        <input name="imageUrl" onChange={props.changeHandler} type="text" value={props.formValues.imageUrl} />
        <label>Campus</label>
        <input name="campusName" onChange={props.changeHandler} type="text" value={props.formValues.campusName} />
        <button className={`${props.buttonClass}-student-btn link-buttons`}>{props.buttonText}</button>
      </form>
    </div>
  );
}

export default Form;
