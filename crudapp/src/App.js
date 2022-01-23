import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";

import { NavBar, Home } from "./components";
import { AllCampuses } from "./components/campuses";
import {
  AllStudentsPage,
  SingleStudent,
  StudentForm,
  EditStudentForm,
  StudentRow,
} from "./components/students";

export default function App() {
  const navigate = useNavigate;
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});

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

  function clickSelectedStudent(id) {
    const selected = students.find((student) => student.studentId === id);
    setSelectedStudent(selected);
  }

  function deleteSelectedStudent(studentId, studentToDelete) {
    const updatedStudents = students.filter((student) => student.studentId !== studentId);
    setStudents(updatedStudents);

    const deleteStudent = async () => {
      await axios.delete(`http://localhost:8080/students/${studentId}`, studentToDelete);
    };

    deleteStudent();
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Campus routes */}
        <Route path="/CampusCard" element={<AllCampuses campuses={campuses} />} />

        {/* Student Routes */}
        <Route
          path="/students"
          element={
            <AllStudentsPage students={students} selectHandler={clickSelectedStudent} />
          }
        />
        <Route path="/students/student-form" element={<StudentForm />} />
        <Route
          path="/students/:studentId"
          element={
            <SingleStudent
              selectHandler={clickSelectedStudent}
              deleteHandler={deleteSelectedStudent}
              allCampuses={campuses}
            />
          }
        />
        <Route
          path="/students/:studentId/edit-student"
          element={<EditStudentForm student={selectedStudent} />}
        />
      </Routes>
      <StudentRow />
    </div>
  );
}
