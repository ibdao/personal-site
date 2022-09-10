import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Connect from "./pages/Connect";



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
