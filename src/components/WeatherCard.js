import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import axios from "axios";

export default class WeatherCard extends Component {
  onDelete = (e) => {
    let idDel = this.props.data.id;
    e.preventDefault();
    axios.post("http://localhost:8080/savedWeather", idDel).then((entry) => {});
  };

  render() {
    console.log(this.props);

    const { data } = this.props;
    console.log(`THIS IS THE DATA FOR WEATHER CARD${data}`);

    // if (data.searches === null) {
    //   return <p>LOADING</p>;
    // } else {
    //   const weatherInfo = data.searches;
    //   console.log(weatherInfo);

    //   const weatherCard = weatherInfo.map((cards) => (

    //   ))
    return (
      <Card key={data.id}>
        City: {data.cityname}
        Temperature: {data.temperature}
        Humidity: {data.humidity}
        <Button label="Delete Entry!" onClick={this.onDelete} />
      </Card>
    );
  }
}
