import React, { Component } from "react";
import "./App.css";
import PhotoContainer from "./PhotoContainer.jsx";

let characters = [
  {
    name: "Lynel",
    id: 121,
  },
  {
    name: "Sentry",
    id: 128,
  },
  {
    name: "Guardian Turrent",
    id: 127,
  },
  {
    name: "Stone Talus",
    id: 139,
  },
  {
    name: "Hinox",
    id: 147,
  },
  {
    name: "Dinraal",
    id: 153,
  },
  {
    name: "Naydra",
    id: 154,
  },
  {
    name: "Windblight Ganon",
    id: 162,
  },
  {
    name: "Calamity Ganon",
    id: 163,
  },
  {
    name: "Sunshroom",
    id: 180,
  },
  {
    name: "Silent Princess",
    id: 199,
  },
  {
    name: "Swift Carrot",
    id: 192,
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10").then(
      (response) => {
        if (!response.ok) {
          throw Error("Error fetching json data");
        }
        return response
          .json()
          .then((allData) => {
            this.setState({ photos: allData });
          })
          .catch((err) => {
            throw Error(err.message);
          });
      }
    );
  }

  render() {
    return (
      <section className="app">
        <p>Is this working?</p>
        <PhotoContainer photos={this.state.photos} />
      </section>
    );
  }
}

export default App;
