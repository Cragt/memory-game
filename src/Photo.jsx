import React from "react";

const Photo = (props) => {
  return (
    <section className="photo">
      <img src={props.url} alt="Zelda Photo" />
    </section>
  );
};

export default Photo;
