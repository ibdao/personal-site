import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Projects from "./Projects";
import About from "./About";
import Connect from "./Connect";



function RoutesList() {
  return (
    <div>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<About />} path="/about" />
        <Route element={<Connect />} path="/connect" />
      </Routes>
    </div>
  );
}

export default RoutesList;
