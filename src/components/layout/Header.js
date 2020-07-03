import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";

class Header extends Component {
  render() {
    return (
      <>
        <Toolbar>
          <div className="p-toolbar-group-left">
            <Link to="/">Search for Weather</Link>
          </div>
          <div className="p-toolbar-group-right">
            <Link to="/savedWeathers">Previous Weather Searches</Link>
          </div>
          <h1>Open Weather App</h1>
        </Toolbar>
      </>
    );
  }
}

export default Header;
