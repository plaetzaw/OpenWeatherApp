import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { apiKey } from "./apiKey";
import axios from "axios";
import "primeflex/primeflex.css";

export class weatherSearch extends Component {
  constructor() {
    super();
    this.state = {
      citySearched: "Houston",
      temperature: "",
      humidity: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.citySearched]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.citySearched);
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${this.state.citySearched}&appid=${apiKey}`
      )
      .then((weather) => {
        console.log(weather);
      });
  };

  render() {
    return (
      <div className="p-fluid">
        Weather Search
        <br />
        What city would you like to search for weather in?
        <br />
        <div className="p-fluid">
          <InputText
            name="citySearched"
            placeholder="City"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />
          <Button label="Search!" onClick={this.onSubmit} />
        </div>
        <br />
        Weather in {this.citySearched}
        Temperature: {this.temperature}
        Humidity: {this.humidity}
      </div>
    );
  }
}

export default weatherSearch;
