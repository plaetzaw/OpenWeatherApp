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
    axios
      .post("https://openweatherproject.herokuapp.com/deleteWeather", idObj)
      .then((entry) => {
        console.log(`Removing entry ${idObj} from the Database`);
        console.log(entry);
        window.location.reload(false);
      });
  };

  render() {
    const cardStyle = {
      display: "flex",
      margin: "10px",
      backgroundColor: "lightblue",
      border: "5px",
      alignItems: "center",
      color: "black",
    };

    console.log(this.props);

    const { data } = this.props;
    console.log(`THIS IS THE DATA FOR WEATHER CARD ${data.id}`);

    return (
      <Card style={cardStyle} key={data.id}>
        <strong>City: {data.cityname}</strong>
        <br />
        <strong>Temperature: {data.temperature}</strong>
        <br />
        <strong>Humidity: {data.humidity}</strong>
        <br />
        <strong>Inserted into DB: {data.date}</strong>
        <br />
        <Button label="Delete Entry!" onClick={this.onDelete} />
        <br></br>
      </Card>
    );
  }
}
