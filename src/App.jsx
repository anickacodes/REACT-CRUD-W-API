import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  console.log("One of Our Environment Variables: ", import.meta.env.VITE_10_1_VAR)

  return (
    <>
    <Router >

      <h1>ScreenViews</h1>

      <h2>-TEST- {import .meta. env.VITE_10_1_VAR} </h2>
      </Router>
    </>
  )
}

export default App
