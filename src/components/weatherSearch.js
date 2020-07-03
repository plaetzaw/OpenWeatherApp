import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { apiKey } from "./apiKey";
import axios from "axios";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "primeflex/primeflex.css";

export class weatherSearch extends Component {
  constructor() {
    super();
    this.state = {
      citySearched: "",
      temperature: null,
      humidity: null,
      date: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.citySearched);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.citySearched}&appid=${apiKey}`
      )
      .then((weather) => {
        this.setState({
          temperature: Math.floor(
            parseInt((weather.data.main.temp - 273.15) * (9 / 5) + 32)
          ),
          humidity: parseInt(weather.data.main.humidity),
          date: dayjs.extend(advancedFormat),
        });
        console.log(weather.data.main.humidity);
        console.log(weather.data);
      });
  };

  onSave = (e) => {
    e.preventDefault();
    let weatherObj = {
      cityname: this.state.citySearched,
      temperature: this.state.temperature,
      humidity: this.state.humidity,
      //   date: this.state.date,
    };
    console.log(weatherObj);
    axios.post("http://localhost:8080/viewWeather", weatherObj).then((res) => {
      console.log("POST PLS");
      console.log(res);
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
            onChange={(e) => this.handleChange(e)}
          />
          <Button label="Search!" onClick={this.onSubmit} />
          <Button label="SAVE!" onClick={this.onSave} />
        </div>
        <br />
        Weather in {this.state.citySearched}
        Temperature: {this.state.temperature}
        Humidity: {this.state.humidity}
      </div>
    );
  }
}

export default weatherSearch;
