import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <nav className="Navigation navbar-expand-md container-fluid ms-auto">
      <NavLink key="hompage" to="/">
        ID
      </NavLink>
      <div className="Navigation-links ms-auto">
        <NavLink key="projects" to="/projects">
          My Projects
        </NavLink>
        <NavLink key="about" to="/about">
          About Me
        </NavLink>
        <NavLink key="connect" to="/connect">
          Connect
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
