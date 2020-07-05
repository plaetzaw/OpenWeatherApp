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

  // onDelete = (e) => {
  //   this.setState({
  //     toDelete: this.cards.id,
  //   });
  //   e.preventDefault();
  //   axios.post("http://localhost:8080/savedWeather").then((entry) => {
  //     // ({ id: id });
  //   });
  // };

  render() {
    if (this.state.searches === null) {
      return <p>PLEASE SEARCH FOR SOMETHING</p>;
    } else {
      const weatherInfo = this.state.searches;
      //   let loading = this.state.loading ? { weatherCard } : <div>Loading!</div>;

      let weatherCardStuff = weatherInfo.map((cards) => (
        <WeatherCard data={cards} />
      ));
      return (
        <>
          {weatherCardStuff}
          {/* <Card key={data.cards.id}>
                  City: {data.cards.cityname}
                  Temperature: {data.cards.temperature}
                  Humidity: {data.cards.humidity}
                  <Button label="Delete Entry!" onClick={this.onDelete} />
              </Card> */}
          {/* <WeatherCard data={this.state.searches} /> */}
        </>
      );
    }
  }
}

export default savedWeathers;
