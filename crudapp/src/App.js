import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";

//temporary
import dummyStudents from './components/dumbStudents'
import dumbCampuses from './components/dumbCampuses'

import { NavBar, Home } from "./components";
import { AllCampuses, CampusForm, EditCampus } from "./components/campuses";
import { AllStudentsPage, SingleStudent, StudentForm } from "./components/students";
import dumbStudents from "./components/dumbStudents";

export default function App() {
  const students = dumbStudents;
  const campuses = dumbCampuses;

  console.log(students)

  // const [students, setStudents] = useState([]);
  // const [campuses, setCampuses] = useState([]);

  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     const students = await axios.get("http://localhost:8080/students/");
  //     setStudents(students.data);
  //   };

  //   const fetchCampuses = async () => {
  //     const campuses = await axios.get("http://localhost:8080/campuses/");
  //     setCampuses(campuses.data);
  //   };

  //   fetchStudents();
  //   fetchCampuses();
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CampusCard" element={<AllCampuses campuses={campuses} />} />
        <Route path="/students" element={<AllStudentsPage students={students} />} />
        <Route path="/students/:studentId" element={<SingleStudent />} />
        <Route path="/students/student-form" element={<StudentForm />} />
        <Route path="/CampusCard/campus-form" element={<CampusForm />} />
        <Route path="/EditCampus" element={<EditCampus />} />
      </Routes>

      {/* FORM TESTS */}
      {/* {<CampusForm />} */}
      {/* {<StudentForm />} */}
    </div>
  );
}
