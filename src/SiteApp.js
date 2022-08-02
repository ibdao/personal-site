import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.js";
import Navigation from "./Navigation";

function SiteApp() {
  return (
    <div className="SiteApp">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default SiteApp;
