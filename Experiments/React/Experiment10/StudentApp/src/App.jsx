import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentList from './StudentList'

function App() {
  const students = [
    {
      id : 1,
      name : "Siddhi Chavan",
      age : 20,
      email : "siddhi@gmail.com",
      course : "AIML"
    },
    {
      id : 2,
      name : "Riddhi Chavan",
      age : 20,
      email : "riddhi@gmail.com",
      course : "B.Sc Forensic science"
    },
    {
      id : 3,
      name : "Tanishka Chavan",
      age : 15,
      email : "tanu@gmail.com",
      course : "10th"
    }
  ]

  return (
    <>
      <div>
          <h1 style={{paddingLeft: "60px"}}>Student Management</h1>

          <StudentList students={students} />
      </div>
    </>
  )
}

export default App;
