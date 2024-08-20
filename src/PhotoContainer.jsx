import React from "react";
import Photo from "./Photo.jsx";

const PhotoContainer = (props) => {
  const displayPhotos = () => {
    return props.photos.map((photo) => {
      return <Photo url={photo.url} key={photo.url} />;
    });
  };

  return (
    <>
      <section>{displayPhotos()}</section>
    </>
  );
};

export default PhotoContainer;
