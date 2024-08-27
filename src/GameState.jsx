import { useState, useEffect } from "react";
import PhotoContainer from "./PhotoContainer";

export default function GameState({ photos }) {
  const [shuffledPhotos, setShuffledPhotos] = useState([]);
  const [score, setScore] = useState(0);

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
  };

  return (
    <>
      <p>
        {score} of {photos.length}
      </p>
      <PhotoContainer photos={shuffledPhotos} />
      <button onClick={handleShuffle}>Shuffle</button>
    </>
  );
}
