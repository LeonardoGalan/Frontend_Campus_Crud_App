import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Home } from "./components";
import { CampusForm, Dropdown, ShowSingle, StudentForm } from "./components/generic";
import { CampusCard, EditCampus } from "./components/campuses";
import { AllStudentsPage } from "./components/students";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/CampusCard" element={<CampusCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<AllStudentsPage />} />
      </Routes>

      <CampusForm/>
      <StudentForm/>


      <EditCampus />

      <Dropdown name=" to Campus" />

      <Dropdown name="Students" />

      <ShowSingle />
    </div>
  );
}
