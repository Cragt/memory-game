import React from "react";
import Photo from "./Photo.jsx";

const PhotoContainer = ({ photos, checkClicked }) => {
  const displayPhotos = () => {
    return photos.map((photo) => (
      <Photo
        url={photo.image}
        key={photo.id}
        id={photo.id}
        checkClicked={checkClicked}
      />
    ));
  };

  return <section className="photo-container">{displayPhotos()}</section>;
};

export default PhotoContainer;
