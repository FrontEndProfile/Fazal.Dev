import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Resume from '../pages/Resume/Resume'

const Navigates = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default Navigates