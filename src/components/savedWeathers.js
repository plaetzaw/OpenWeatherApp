import React, { Component } from "react";
import axios from "axios";

export class savedWeathers extends Component {
  constructor() {
    super();
    this.state = {
      citySearched: "",
      temperature: "",
      humidity: "",
    };
  }

  pastWeathers() {
    axios.get("/savedWeather").then((res) => {
      console.log(res);
    });
  }

  render() {
    return <div></div>;
  }
}

export default savedWeathers;
