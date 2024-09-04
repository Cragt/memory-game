import React from "react";
import Photo from "./Photo.jsx";

const PhotoContainer = ({ photos, checkClicked }) => {
  return (
    <section className="photo-container">
      {photos.map((photo) => (
        <Photo
          url={photo.image}
          key={photo.id}
          id={photo.id}
          checkClicked={checkClicked}
        />
      ))}
    </section>
  );
};

export default PhotoContainer;
