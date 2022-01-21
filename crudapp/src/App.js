import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Home } from "./components";
import { Form, Dropdown, ShowSingle } from "./components/generic";
import { CampusCard, EditCampus } from "./components/campuses";
import { AllStudentsPage } from "./components/students";
import ".styles/App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/CampusCard" element={<CampusCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<AllStudentsPage />} />
      </Routes>

      <Form name="Campus" />

      <Form name="Student" />

      <EditCampus />

      <Dropdown name=" to Campus" />

      <Dropdown name="Students" />

      <ShowSingle />
    </div>
  );
}
