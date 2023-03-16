import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from '../pages/Home/Home'
// import 

const Routing = () => {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/Detail" element={<Detail />}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default Routing