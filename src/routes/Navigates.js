import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Resume from '../pages/Resume/Resume'
import Contact from '../pages/Contact/Contact'
import Works from '../pages/Works/Works'

const Navigates = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Works" element={<Works />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default Navigates