import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import axios from "axios";

export default class WeatherCard extends Component {
  onDelete = (e) => {
    e.preventDefault();
    let idObj = {
      id: this.props.data.id,
    };
    // let id = this.props.data.id;
    console.log(typeof idObj);
    console.log(idObj);
    axios.post("http://localhost:8080/deleteWeather", idObj).then((entry) => {
      console.log(`Removing entry ${idObj} from the Database`);
      console.log(entry);
      window.location.reload(false);
    });
  };

  render() {
    console.log(this.props);

    const { data } = this.props;
    console.log(`THIS IS THE DATA FOR WEATHER CARD ${data.id}`);

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
        <br />
        Temperature: {data.temperature}
        <br />
        Humidity: {data.humidity}
        <br />
        <Button label="Delete Entry!" onClick={this.onDelete} />
        <br></br>
      </Card>
    );
  }
}
