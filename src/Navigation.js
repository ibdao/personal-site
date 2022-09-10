import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <nav className="Navigation navbar navbar-expand-sm bg-light">
      <NavLink key="hompage" to="/" class="left-nav">
        Ian Dao
      </NavLink>
      <span className="navbar-nav ml-auto">
        <NavLink key="about" to="/about" class="nav-item">
          About Me
        </NavLink>
        <NavLink key="projects" to="/projects" class="nav-item">
          My Projects
        </NavLink>
        <NavLink key="connect" to="/connect" class="nav-item">
          Connect
        </NavLink>
      </span>
    </nav>
  );
}

export default Navigation;
