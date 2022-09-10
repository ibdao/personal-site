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
          <h4>Legacy Code</h4>
          <p>About NumbersApi_V2 </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
