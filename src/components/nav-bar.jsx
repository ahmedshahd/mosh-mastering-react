import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          Navbar
          <span className="badge rounded-pill bg-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
