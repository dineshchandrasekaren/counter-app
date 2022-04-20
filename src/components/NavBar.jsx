import React from "react";

const NavBar = ({ counterLength }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          Navbar <span className="badge bg-primary">{counterLength}</span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
