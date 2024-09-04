// photo.jsx
import React from "react";

const Photo = ({ url, checkClicked, id }) => {
  return (
    <section className="photo">
      <img src={url} alt="Zelda Photo" onClick={() => checkClicked(id)} />
    </section>
  );
};

export default Photo;
