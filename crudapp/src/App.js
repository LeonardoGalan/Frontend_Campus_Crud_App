import logo from './logo.svg';
import './App.css';
import {CampusCard} from './CampusCard'
import NavBar from './NavBar'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/CampusCard" element={<CampusCard/>}/>
      <Route path="/" element={<div>Hello world</div>}/>
      </Routes>
    </div>
  );
}

export default App;
