import './App.css';
import CampusCard from './components/CampusCard'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import React from "react";
import AllStudentsPage from "./components/AllStudentsPage";
import Home from "./components/Home"
import Form from "./components/Form"
import EditCampus from './components/EditCampus';
import Dropdown from './components/Dropdown';
import ShowSingle from './components/ShowSingle';


export default function App() {
  return (
    <div className="App">

      <NavBar/>
      <Routes>
      <Route path="/CampusCard" element={<CampusCard/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Students" element={ <AllStudentsPage />}/>
      </Routes>

      <Form
        name = "Campus"
      />

      <Form
        name = "Student"
      />

      <EditCampus/>

      <Dropdown
        name=" to Campus"
      />

      <Dropdown
        name="Students"
      />

      <ShowSingle/>
  </div>
  );
}
