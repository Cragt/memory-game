import { useState, useEffect } from "react";
import PhotoContainer from "./PhotoContainer";

export default function GameState({ photos }) {
  const [shuffledPhotos, setShuffledPhotos] = useState([]);
  const [score, setScore] = useState(0);
  const [pickedPictures, setPickedPictures] = useState([]);

  const resetGame = () => {
    setScore(0);
    setPickedPictures([]);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    if (photos.length > 0) {
      setShuffledPhotos(shuffleArray(photos));
    }
  }, [photos]);

  const handleShuffle = () => {
    setShuffledPhotos(shuffleArray(shuffledPhotos));
    console.log(shuffledPhotos);
  };

  const handleClick = (id) => {
    handleShuffle();
    if (!pickedPictures.includes(id)) {
      setScore((score) => score + 1);
      setPickedPictures((picked) => [...picked, id]);
    } else {
      resetGame();
    }
  };

  return (
    <>
      {score === 12 ? (
        <p>You win!</p>
      ) : (
        <p>
          {" "}
          {score} of {photos.length}{" "}
        </p>
      )}
      <PhotoContainer photos={shuffledPhotos} checkClicked={handleClick} />
      <button onClick={handleShuffle}>Shuffle</button>
    </>
  );
}
