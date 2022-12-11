import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="Projects text-center">
      <div className="row text-center">
        <div className="col-md-4">
          <h2>Jobly</h2>
          <h4>
            <a href="https://obsolete-band.surge.sh/">Live Demo</a> 
            <span> | </span> 
            <a href="https://github.com/ibdao/react-jobly">GitHub</a>
          </h4>
          <p>Jobly is a job searching site built using Create-React-App and
            Express.js backend. It features user sign up, login and logout functionality
            stored in a SQL database with hashed passwords. Routes were protected using
            middleware including JWT authorization and authentication. Searching for companies or jobs
            features "live search" using debounce functionality. 
          </p>
        </div>
        {/* <div className="col-lg-20">
          <h2>Friender</h2>
          <p>About Friender</p>
        </div> */}
        <div className="col-md-4">
          <h2>NumbersApi_V2</h2>
          <h4><a href="http://numbersapi.com/#42">Legacy Code</a>
          <span> | </span> 
            <a href="https://github.com/ibdao/numbersAPI-V2">GitHub</a></h4>
          <p> NumbersAPI is a service to provide number facts. 
            There are 4 different categories: trivia, date, year and math. Version 2 is a project 
            to modernize and rebuild the legacy code using Flask/SQLAlchemy and a React frontend.
            Contributions to this project include: designing database models for each category, creating seed data for API,
            setting up email notifications for subscribers using SMTP email servers.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
