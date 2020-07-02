import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import apiKey from "./apiKey";

export class weatherSearch extends Component {
  constructor() {
    super();
    this.state = {
      citySearched: "",
      weatherInfo: {},
    };
  }
  search() {
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${citySearched}&appid=${apiKey}`
      )
      .then((weather) => {
        console.log(weather);
      });
  }

  render() {
    return (
      <div>
        Weather Search
        <br />
        What city would you like to search for weather in?
        <InputText></InputText>
        <Button label="Search!" onClick={this.handleClick} />
      </div>
    );
  }
}

export default weatherSearch;
