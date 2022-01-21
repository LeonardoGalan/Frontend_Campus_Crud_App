import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api";
import "./styles/App.css";

import { NavBar, Home } from "./components";
import { AllCampuses, CampusForm } from "./components/campuses";
import { AllStudentsPage, StudentForm } from "./components/students";

export default function App() {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    api
      .get("students/")
      .then((results) => setStudents(results.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get("campuses/")
      .then((results) => setCampuses(results.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/CampusCard"
          element={<AllCampuses campuses={campuses} />}
        />

        <Route
          path="/Students"
          element={<AllStudentsPage students={students} />}
        />
      </Routes>

      {/* FORM TESTS */}
      <CampusForm />
      <StudentForm />
    </div>
  );
}
