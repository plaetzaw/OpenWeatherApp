import React, { Component } from "react";
import { Button } from "primereact/button";
import axios from "axios";
import { Card } from "primereact/card";
import WeatherCard from "./WeatherCard";

export class savedWeathers extends Component {
  constructor() {
    super();
    this.state = {
      citySearched: "",
      temperature: "",
      humidity: "",
      //   searches: null,
      searches: {
        id: 1,
        cityname: "Houston",
        temperature: 92,
        humidity: 55,
      },
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/savedWeather").then((weather) => {
      console.log(weather);
      console.log(weather.data);
      this.setState({
        ...this.state,
        searches: weather.data,
      });
      console.log(this.state.searches);
    });
  };

  onDelete = (e) => {
    e.preventDefault();
    axios.delete("http://localhost:8080/savedWeather").then((id) => {
      //   ({ id: id });
    });
  };

  render() {
    const weatherInfo = this.state.searches;
    console.log(weatherInfo.id);
    console.log(weatherInfo.cityname);
    console.log(weatherInfo.temperature);
    console.log(weatherInfo.humidity);
    // Now Add the mapping statement
    // weatherInfo.map((id) => {});
    return (
      <>
        <Button label="Get All Weather!" onClick={this.onSubmit} />
        <Card key={weatherInfo.id}>
          City: {weatherInfo.cityname}
          Temperature: {weatherInfo.temperature}
          Humidity: {weatherInfo.humidity}
          <Button label="Delete Entry!" onClick={this.onDelete} />
        </Card>
      </>
    );
  }
}

export default savedWeathers;
