import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import About from "../Pages/About/About";
import App from "../App";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Components/Projects/ProjectDetails/ProjectDetails";
import Resume from "../Pages/Resume/Resume";

export default (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route element={<Home />} path="web-profile" />
      <Route element={<About />} path="about" />
      <Route element={<Projects />} exact path="projects">
        <Route element={<ProjectDetails />} path=":projectId" />
      </Route>
      <Route element={<Resume />} path="resume" />
      <Route element={<Contact />} path="contact" />
    </Route>
  </Routes>
);
