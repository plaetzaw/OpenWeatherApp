import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Toolbar from "material-ui/Toolbar";

export class BaseLayout extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="nav-buttons">
          <RaisedButton className="tabs" component={Link} to="/weatherSearch">
            <strong>Login</strong>
          </RaisedButton>
          <RaisedButton className="tabs" component={Link} to="/savedWeathers">
            <strong>Sign Up</strong>
          </RaisedButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default BaseLayout;
