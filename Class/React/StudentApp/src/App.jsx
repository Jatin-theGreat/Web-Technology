import { useState } from 'react'

import './App.css'
import StateEx from './StateEx'
import StudentInfo from './StudentInfo'
import Counter from './Counter'
import Welcome from './Welcome'
import LiveSearch from './LiveSearch'
import Product from './Product'
import Button from './Button'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const product = {
    name : "Laptop",
    price : 61000,
    brand : "HP"
  };

  function sayHello(){
    alert("Hello!");
  }


  return (
    <>
      {/* Routing code  */}
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>

      {/* Without routing */}
      {/* <StateEx/> */}
      {/* <Welcome/>
      <StudentInfo fName="Siddhi" age = "20" course="AIML" />
      <Counter/>
      <LiveSearch/>
      <Product data={product}/>
      <Button greet={sayHello}/> */}
    </>
  )
}

export default App


