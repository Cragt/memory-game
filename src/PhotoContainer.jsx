import React from "react";
import Photo from "./Photo.jsx";

const PhotoContainer = (props) => {
  const displayPhotos = () => {
    return props.photos.map((photo) => {
      return <Photo url={photo.image} key={photo.id} />;
    });
  };

  return <section className="photo-container">{displayPhotos()}</section>;
};

export default PhotoContainer;
