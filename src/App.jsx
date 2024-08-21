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
    this.fetchInitiated = false;
  }

  componentDidMount() {
    if (this.fetchInitiated) return;
    this.fetchInitiated = true;

    const imageBaseUrl = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/`;
    const fetchPromises = characters.map((character) => {
      const imageUrl = `${imageBaseUrl}${character.id}/image`;

      return fetch(imageUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching image for ID ${character.id}`);
          }
          return response.url;
        })
        .then((imageUrl) => ({
          id: character.id,
          image: imageUrl,
        }))
        .catch((error) => {
          console.error(
            `Failed to fetch image for ID ${character.id}: `,
            error
          );
          return { id: character.id, image: "" };
        });
    });

    Promise.all(fetchPromises)
      .then((results) => {
        this.setState({ photos: results });
      })
      .catch((err) => {
        console.error("Error fetching data: ", err.message);
      });
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
