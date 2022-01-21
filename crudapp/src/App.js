import React from "react";
import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import { NavBar, Home } from "./components";
import { CampusForm, Dropdown, ShowSingle, StudentForm } from "./components/generic";
import { CampusCard, EditCampus } from "./components/campuses";
import { AllStudentsPage } from "./components/students";
import "./styles/App.css";

export default function App() {
  const [students, setStudents] = React.useState([]);
  const [campuses, setCampuses] = React.useState([]);

  React.useEffect(()=>{
    setStudents(axios.get("").data)
  }, [])

  React.useEffect(()=>{
    setCampuses(axios.get("").data)
  }, [])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/CampusCard" element={<CampusCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<AllStudentsPage 
          students = {students}
        />} />
      </Routes>
    </div>
  );
}
