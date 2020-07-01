import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Typography from "material-ui/styles/typography";

export class HeaderTest extends Component {
  render() {
    return (
      <AppBar position="static">
        <Typography>Weather Search</Typography>
        <Typography>Saved Search</Typography>
      </AppBar>
    );
  }
}

export default HeaderTest;
