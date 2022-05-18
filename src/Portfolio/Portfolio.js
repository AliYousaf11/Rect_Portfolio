import React from "react";
import NAV from "./NAV";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Service from "./Service";
import Contact from "./Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Portfolio() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <NAV />
                <Home />
              </> 
            }
          >
          </Route>
          
          <Route
            path="/"
            element={
              <>
                <NAV />
                <Home />
              </> 
            }
          >
          </Route>
          <Route
          path="/about"
            element={
              <>
                <NAV />
                <About />
              </> 
            }>
          </Route>

          <Route
           path="/skill"
           element={
             <>
               <NAV />
               <Skill />
             </> 
           }>
          </Route>

          <Route
           path="/service"
           element={
             <>
               <NAV />
               <Service />
             </> 
           }>
          </Route>

          <Route
           path="/contact"
           element={
             <>
               <NAV />
               <Contact />
             </> 
           }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Portfolio;
