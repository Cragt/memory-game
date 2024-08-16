import { useState } from "react";
import "./App.css";

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

function App() {
  const [counter, setCounter] = useState(0);

  function Cards() {
    return characters.map((c) => <p key={c.id}>{c.name}</p>);
  }

  return (
    <div>
      <p>{counter}</p>
      <Cards />
    </div>
  );
}

export default App;
