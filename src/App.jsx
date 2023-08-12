import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import './App.css'
import NavBar from './Component/NavBar'
import ShowsList from './Component/ShowRelevant/ShowsList'
import ShowsNew from './Component/ShowRelevant/ShowsNew'

function App() {
  // const [count, setCount] = useState(0)
  // console.log("One of Our Environment Variables: ", import.meta.env.VITE_10_1_VAR)
const var10_1 =  import.meta.env.VITE_10_1_VAR

  return (
    <>
    <Router >
<header>
<h1><em>ScreenViews</em></h1>
{/* <h2>-TEST- {var10_1} </h2> <br /> */}
 <NavBar />
</header>

      <Routes>
        <Route path='/' element={ <h1>Home</h1>} />
        <Route path='/shows' element={ <h3>All shows <ShowsList /></h3>}/>
        <Route path='/shows/new' element={ <h3>Form for new show <ShowsNew /></h3>}/>
        <Route path='/movies' element={ <h3>All Movies</h3>}/>
      </Routes>


      <footer>
        10.1 ©
      </footer>
      </Router>
    </>
  )
}

export default App


/*
CRUD FOR MOVIES
   Movies Endpoint:       /api/movies

CRUD ACTION     REQUEST                 RELEVANT ROUTE/API

CREATE           POST MOVIES/NEW
READ                GET
UPDATE 
DESTROY

CRUD FOR SHOWS
   Shows Endpoint:       /api/shows 

CREATE           POST     SHOWS/NEW
READ              GET     shows/ (index) or /shows/:id
UPDATE 
DESTROY






*/