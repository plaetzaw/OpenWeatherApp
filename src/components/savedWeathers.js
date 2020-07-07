import React, { Component } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

export class savedWeathers extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searches: null,
      toDelete: null,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios
      .get("https://openweatherproject.herokuapp.com/savedWeather")
      .then((weather) => {
        console.log(weather);
        console.log(weather.data);
        this.setState({
          searches: weather.data,
          loading: false,
        });
        console.log(this.state.searches);
      });
  }

  render() {
    if (this.state.searches === null) {
      return <p>Pulling previous searches from database</p>;
    } else {
      const weatherInfo = this.state.searches;
      //   let loading = this.state.loading ? { weatherCard } : <div>Loading!</div>;

      let weatherCardStuff = weatherInfo.map((cards) => (
        <WeatherCard data={cards} />
      ));
      return (
        <>
          <div className="p-grid">{weatherCardStuff}</div>
        </>
      );
    }
  }
}

export default savedWeathers;
