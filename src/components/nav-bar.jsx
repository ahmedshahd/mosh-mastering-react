import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar{" "}
            <span class="badge rounded-pill bg-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
