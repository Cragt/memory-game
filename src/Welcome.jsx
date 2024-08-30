import { useState } from "react";
import App from "./App";

export default function Welcome({ onStartGame }) {
  const [startGame, setStartGame] = useState(false);

  function handleStartClick() {
    setStartGame(true);
  }

  return (
    <div className="welcome-box">
      {startGame ? (
        <App />
      ) : (
        <>
          <h1>Welcome!</h1>
          <h2>
            This is a memory game. You can choose between Pokemon pictures or
            Zelda BoTW pictures.
          </h2>
          <h3>Directions:</h3>
          <ul>
            <li>Click a photo</li>
            <li>
              After you click a picture, all the pictures will be shuffled
            </li>
            <li>
              The goal is to click on each picture, without clicking on the same
              photo more than once. If you do, you lose!
            </li>
          </ul>
          <button onClick={handleStartClick}>Start</button>
        </>
      )}
    </div>
  );
}
