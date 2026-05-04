import { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route,Router,Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';

function App() {
  const [students , setStudents] = useState([]); 

  const addStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: students.length + 1   
    };
    setStudents([...students, newStudent]);
  };

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/add' element={<AddStudent addStudent={addStudent}/>}/>
        <Route path='/list' element={< StudentList students={students}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
