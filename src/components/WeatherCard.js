// import React, { Component } from "react";
// import { Button } from "primereact/button";
// import axios from "axios";
// import { Card } from "primereact/card";

// export class savedWeathers extends Component {
//   constructor() {
//     super();
//     this.state = {
//       citySearched: "",
//       temperature: "",
//       humidity: "",
//     };
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     axios.get("http://localhost:8080/savedWeather").then((weather) => {
//       console.log(weather);
//       console.log(weather.data);
//       this.setState({
//         searches: weather.data,
//       });
//       console.log(this.state.searches);
//     });
//   };

//   render() {
//     return (
//       <>
//         {/* <Card key={index}>
//           City: {weatherInfo.cityname}
//           Temperature: {weatherInfo.temperature}
//           Humidity: {weatherInfo.humidity}
//           <Button label="Delete Entry!" onClick={this.onDelete} />
//         </Card> */}
//       </>
//     );
//   }
// }

// export default savedWeathers;
