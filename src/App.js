import React from "react"
import Login from "./Components/Login"
import { Routes, Route } from "react-router-dom"
import Profile from "./Components/Profile.js"
import "./style.css"

const App=()=>{

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

    </div>
  )
}

export default App