import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";

import { NavBar, Home } from "./components";
import { AllCampuses, CampusForm, EditCampus, SingleCampus } from "./components/campuses";
import {
  AllStudentsPage,
  SingleStudent,
  AddStudentForm,
  EditStudentForm,
} from "./components/students";

export default function App() {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await axios.get("http://localhost:8080/students/");
      setStudents(students.data);
    };

    const fetchCampuses = async () => {
      const campuses = await axios.get("http://localhost:8080/campuses/");
      setCampuses(campuses.data);
    };

    fetchStudents();
    fetchCampuses();
  }, []);

  /* campus handlers */
  function retrieveUpdatedCampuses(updatedCampuses) {
    setStudents(updatedCampuses);
  }

  /* student handlers */
  function deleteSelectedStudent(studentId) {
    const updatedStudents = students.filter((student) => student.studentId !== studentId);
    setStudents(updatedStudents);
  }

  function retrieveUpdatedStudents(updatedStudents) {
    setStudents(updatedStudents);
  }

  function addNewStudent(newStudent) {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Campus routes */}
        <Route
          path="/campuses"
          element={<AllCampuses campuses={campuses} retrieveHandler={retrieveUpdatedCampuses} />}
        />
        <Route path="/campuses/:campusName" element={<SingleCampus campuses={campuses} />} />
        <Route path="/campuses/campus-form" element={<CampusForm />} />
        <Route path="/campuses/:campusName/edit-campus" element={<EditCampus />} />

        {/* Student Routes */}
        <Route
          path="/students"
          element={
            <AllStudentsPage allStudents={students} retrieveHandler={retrieveUpdatedStudents} />
          }
        />
        <Route
          path="/students/student-form"
          element={<AddStudentForm addStudentHandler={addNewStudent} campuses={campuses} />}
        />
        <Route
          path="/students/:studentId"
          element={<SingleStudent deleteHandler={deleteSelectedStudent} allCampuses={campuses} />}
        />
        <Route path="/students/:studentId/edit-student" element={<EditStudentForm />} />
      </Routes>
    </div>
  );
}
