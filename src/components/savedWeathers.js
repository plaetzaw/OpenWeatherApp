import React, { Component } from "react";
import { Button } from "primereact/button";
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

  onSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/savedWeather").then((weather) => {
      console.log(weather);
    });
    console.log("PRESS BOOTen");
  };

  render() {
    return (
      <div>
        <Button label="Get All Weather!" onClick={this.onSubmit} />
      </div>
    );
  }
}

export default savedWeathers;
