import React from "react";
import "../../styles/StudentForm.css";

function Form(props) {
  return (
    <div className="student-form-container">
      <h2 className="student-form-header">{props.header}</h2>
      <hr />
      <form className="student-form" onSubmit={props.formHandler}>
        <label htmlFor="form-first-name">
          First Name
          {/* {props.errors.firstName && (
            <span className="error-message">{props.errors.firstName}</span>
          )} */}
        </label>
        <input
          name="firstName"
          onChange={props.changeHandler}
          type="text"
          value={props.formValues.firstName}
          id="form-first-name"
        />

        <label htmlFor="form-last-name">
          Last Name
          {/* {props.errors.lastName && <span className="error-message">{props.errors.lastName}</span>} */}
        </label>
        <input
          name="lastName"
          onChange={props.changeHandler}
          type="text"
          value={props.formValues.lastName}
          id="form-last-name"
        />

        <label htmlFor="form-email">
          Email
          {/* {props.errors.email && <span className="error-message">{props.errors.email}</span>} */}
        </label>
        <input
          name="email"
          onChange={props.changeHandler}
          type="text"
          value={props.formValues.email}
          id="form-email"
        />

        <label htmlFor="form-gpa">
          GPA
          {/* {props.errors.gpa && <span className="error-message">{props.errors.gpa}</span>} */}
        </label>
        <input
          name="gpa"
          onChange={props.changeHandler}
          type="number"
          min="0"
          max="4"
          step="0.01"
          value={props.formValues.gpa}
          id="form-gpa"
        />

        <label htmlFor="form-imageUrl">
          Photo
          {/* {props.errors.imageUrl && <span className="error-message">{props.errors.imageUrl}</span>} */}
        </label>
        <input
          name="imageUrl"
          onChange={props.changeHandler}
          type="text"
          value={props.formValues.imageUrl}
          id="form-imageUrl"
        />

        <label htmlFor="form-campusName">
          Campus
          {/* {props.errors.campusName && (
            <span className="error-message">{props.errors.campusName}</span>
          )} */}
        </label>
        <input
          name="campusName"
          onChange={props.changeHandler}
          type="text"
          value={props.formValues.campusName}
          id="form-campusName"
        />

        <button className={`${props.buttonClass}-student-btn link-buttons`}>
          {props.buttonText}
        </button>
      </form>
    </div>
  );
}

export default Form;
